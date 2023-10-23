import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const POST = async ({ request, cookies }) => {
	const token = cookies.get('token');
	if (!token) {
		throw new error('400', 'Unauth');
	}

	const { id } = jwt.verify(token, 'db-project');
	const user = await prisma.user.findFirst({
		where: {
			User_ID: id
		}
	});

	if (!user) {
		throw new error('400', 'Unauth');
	}

	const info = await request.json();
	console.log(info);
	const updateService = {
		Service_ID: info.service.Service_ID
	};
	const updateAppointment = {
		Appointment_date: new Date(info.pet_date),
		Appointment_time: info.time,
		Appointment_status: 'Pending',
		Room_ID: info.room != 0 ? Number(info.room) : null
	};
	const updateState = {
		State_detail: 'กำลังดำเนินการ',
		Recuperate: {
			update: {
				Start_date: new Date(info.pet_date),
				End_date: new Date(
					new Date(info.pet_date).setDate(new Date(info.pet_date).getDate() + info.pet_amount)
				)
			}
		}
	};
	if (info.mode == 'old') {
		const req = await prisma.case.update({
			where: {
				Pet_ID: info.pet_id
			},
			data: {
				Service: {
					connect: updateService
				},
				Appointment: {
					update: updateAppointment
				},
				State: {
					update: updateState
				}
			}
		});
		console.log(req);
		return json({
			message: 'success'
		});
	} else if (info.mode == 'new') {
		const req = await prisma.pet.create({
			data: {
				Pet_name: info.petname,
				Pet_DOB: new Date(info.petBD),
				Pet_gender: info.petGender,
				Pet_species: info.petSpecies,
				Pet_type: info.petType,
				Case: {
					create: {
						Service: {
							connect: updateService
						},
						State: {
							create: {
								State_detail: 'กำลังดำเนินการ',
								Recuperate: {
									create: {
										Start_date: new Date(info.pet_date),
										End_date: new Date(
											new Date(info.pet_date).setDate(
												new Date(info.pet_date).getDate() + info.pet_amount
											)
										)
									}
								}
							}
						},
						Appointment: {
							create: updateAppointment
						}
					}
				},
				User: {
					connect: {
						User_ID: user.User_ID
					}
				}
			}
		});
		console.log(req);
		return json({
			message: 'success'
		});
	}
};

export const GET = async ({ cookies }) => {
	const token = cookies.get('token');
	if (!token) {
		throw new error('400', 'Unauth');
	}

	const { id } = jwt.verify(token, 'db-project');
	const user = await prisma.user.findFirst({
		where: {
			User_ID: id
		}
	});

	if (!user) {
		throw new error('400', 'Unauth');
	}

	if (user.User_role == 'Admin') {
		const appointments = await prisma.pet.findMany({
			include: {
				Case: {
					include: {
						Appointment: {
							include: {
								Room: true
							}
						},
						Service: true,
						State: true
					}
				}
			},
			where: {
				Case: {
					Appointment: {
						is: {
							Appointment_status: 'Pending'
						}
					}
				}
			}
		});
		return new json(appointments);
	} else if (user.User_role == 'User') {
		const appointments = await prisma.pet.findMany({
			include: {
				Case: {
					include: {
						Appointment: {
							include: {
								Room: true
							}
						},
						Service: true,
						State: true
					}
				}
			},
			where: {
				User_ID: user.User_ID,
				Case: {
					NOT: {
						Appointment: null
					}
				}
			}
		});
		return new json(appointments);
	}
};

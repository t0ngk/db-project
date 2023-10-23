import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const POST = async ({ params, request }) => {
    const info = await request.json();
	const updateService = {
		Service_ID: info.service.Service_ID
	};
	const updateAppointment = {
		Appointment_date: new Date(info.pet_date),
		Appointment_time: info.time,
		Appointment_status: 'Approved',
		Room_ID: info.room != 0 ? Number(info.room) : null
	};
	const updateState = {
		State_detail: 'นัดหมาย',
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
						User_ID: Number(params.id)
					}
				}
			}
		});
		return json({
			message: 'success'
		});
	}
	return new Response();
};

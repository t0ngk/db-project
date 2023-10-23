import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async ({ request, cookies, params }) => {
	const { id } = params;
	const token = cookies.get('token');
	if (!token) {
		throw new error('400', 'Unauth');
	}

	const { userId } = jwt.verify(token, 'db-project');
	const user = await prisma.user.findFirst({
		where: {
			User_ID: userId
		}
	});

	if (!user) {
		throw new error('400', 'Unauth');
	}

	const pet = await prisma.pet.findMany({
		where: {
			User_ID: Number(id)
		},
		include: {
			Case: {
				include: {
					Service: true,
					State: {
                        include: {
                            Recuperate: true
                        }
                    },
					Appointment: {
						include: {
							Room: true
						}
					}
				}
			}
		}
	});

	return new json(pet);
};

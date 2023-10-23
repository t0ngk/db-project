import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const PATCH = async ({ request, params }) => {
	const { id } = params;
	const info = await request.json();
  console.log(info.Pet_DOB);
	const req = await prisma.pet.update({
		where: {
			Pet_ID: Number(id)
		},
		data: {
			Pet_name: info.Pet_name,
			Pet_type: info.Pet_type,
			Pet_DOB: new Date(info.Pet_DOB),
			Pet_species: info.Pet_species,
			Pet_gender: info.Pet_gender,
			Case: {
				update: {
					State: {
						update: {
							State_detail: info.Case.State.State_detail
						}
					}
				}
			}
		}
	});
  return json({
    message: 'success'
  });
};

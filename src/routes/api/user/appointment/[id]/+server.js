import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async ({params}) => {
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
            User_ID: Number(params.id),
            Case: {
                NOT: {
                    Appointment: null
                }
            }
        }
    });
    console.log(appointments);
    return new json(appointments);
};

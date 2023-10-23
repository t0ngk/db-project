import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { json } from '@sveltejs/kit';

export const POST = async ({params}) => {
    const {id, value} = params;
    const req = await prisma.appointment.update({
        where: {
            Appointment_ID: Number(id)
        },
        data: {
            Appointment_status: value
        }
    });
    return json({
        message: 'success'
    });
};

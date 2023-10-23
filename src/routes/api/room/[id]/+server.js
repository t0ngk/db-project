import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient();

export const PATCH = async ({ params, request }) => {
    const { id } = params;
    const info = await request.json();
    const req = await prisma.room.update({
        where: {
            Room_ID: Number(id)
        },
        data: {
            Room_name: info.Room_name,
            Room_type: info.Room_type,
        }
    });
    return json({
        message: 'success'
    });
}

export const DELETE = async ({ params }) => {
    const { id } = params;
    const req = await prisma.room.delete({
        where: {
            Room_ID: Number(id)
        }
    });
    return json({
        message: 'success'
    });
}

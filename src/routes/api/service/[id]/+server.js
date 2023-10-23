import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient();

export const PATCH = async ({ params, request }) => {
    const { id } = params;
    const info = await request.json();
    const req = await prisma.service.update({
        where: {
            Service_ID: Number(id)
        },
        data: {
            Service_name: info.Service_name,
            Service_type: info.Service_type,
            Service_recuperate: info.Service_recuperate,
        }
    });
    return json({
        message: 'success'
    });
}

export const DELETE = async ({ params }) => {
    const { id } = params;
    const req = await prisma.service.delete({
        where: {
            Service_ID: Number(id)
        }
    });
    return json({
        message: 'success'
    });
}

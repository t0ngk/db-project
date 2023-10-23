import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient();

export const GET = async () => {
    const services = await prisma.service.findMany();
    return new json(services);
};

export const POST = async ({ request }) => {
    const info = await request.json();
    const service = await prisma.service.create({
        data: {
            Service_name: info.Service_name,
            Service_type: info.Service_type,
        }
    });
    return new json(service);
}

import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient();

export const GET = async () => {
    const rooms = await prisma.room.findMany();
    return new json(rooms);
};

export const POST = async ({ request }) => {
    const info = await request.json();
    const room = await prisma.room.create({
        data: {
            Room_name: info.Room_name,
            Room_type: info.Room_type,
        }
    });
    return new json(room);
}

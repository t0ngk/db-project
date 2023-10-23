import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient();

export const GET = async () => {
    
    const users = await prisma.user.findMany({
        select: {
            User_ID: true,
            User_name: true,
            User_role: true,
            User_tel: true,
        }
    });
    return new json(users);
};

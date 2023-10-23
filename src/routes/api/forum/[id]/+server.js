
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { json } from '@sveltejs/kit';

export const GET = async ({params}) => {
    const forums = await prisma.forum.findFirst({
        where: {
            Forum_ID: Number(params.id)
        },
        include: {
            User: true,
            Comment: {
                include: {
                    User: true
                }
            }
        }
    });
    return new json(forums);
};

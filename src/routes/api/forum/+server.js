
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export const GET = async () => {
    const forums = await prisma.forum.findMany({
        include: {
            User: true
        }
    });
    return new json(forums);
};

export const POST = async ({ request, cookies }) => {
    const token = cookies.get('token');
    if (!token) {
        throw new error('400', 'Unauth');
    }

    const { id } = jwt.verify(token, 'db-project');
    const user = await prisma.user.findFirst({
        where: {
            User_ID: id
        }
    });

    if (!user) {
        throw new error('400', 'Unauth');
    }

    const info = await request.json();
    const forum = await prisma.forum.create({
        data: {
            Forum_title: info.title,
            Forum_content: info.content,
            User: {
                connect: {
                    User_ID: user.User_ID
                }
            },
            Forum_created: new Date()
        }
    });
    return new json(forum);
}

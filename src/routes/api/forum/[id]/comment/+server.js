import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export const POST = async ({request, cookies, params}) => {
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
    console.log(params);
    const comment = await prisma.comment.create({
        data: {
            Comment_detail: info.detail,
            User: {
                connect: {
                    User_ID: user.User_ID
                }
            },
            Forum: {
                connect: {
                    Forum_ID: Number(params.id)
                }
            },
            Comment_created: new Date()
        }
    });
    return new json(comment);
};

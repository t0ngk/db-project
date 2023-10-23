import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient();

export const GET = async ({ cookies }) => {
    const token = cookies.get('token');
    if (!token) {
        return new json(null); // return empty json
    }

    const { id } = jwt.verify(token, 'db-project');
    const user = await prisma.user.findFirst({
        where: {
            User_ID: id
        },
        select: {
            User_ID: true,
            User_name: true,
            User_email: true,
            User_role: true,
            User_tel: true,
        }
    });
    return new json(user); // return user as json
}

export const DELETE = async ({ cookies }) => {
    cookies.set('token', '', {
        sameSite: 'lax',
        path: '/'
    });
    return new json(null); // return empty json
}

import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

export async function POST({ request, cookies }) {
	const { email, password } = await request.json();
	const user = await prisma.user.findFirst({
		where: {
			User_email: email
		}
	});

	if (!user) {
		throw error(400, 'User not found');
	}

	const match = await bcrypt.compare(password, user.User_password);
	if (!match) {
		throw error(400, 'Invalid password');
	}

	const token = jwt.sign({ id: user.User_ID }, 'db-project');
	cookies.set('token', token, {
		sameSite: 'lax',
		path: '/'
	});

  return new json({ token });
}

import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

export const POST = async ({ request, cookies }) => {
	const { email, password, name } = await request.json();

  if (!email || !password || !name) {
    throw error(400, 'Invalid request');
  }

	const userExists = await prisma.user.findFirst({
		where: {
			User_email: email
		}
	});

	if (userExists) {
		throw error(400, 'User already exists');
	}

	const hashedPassword = await bcrypt.hash(password, 14);
	const user = await prisma.user.create({
		data: {
			User_email : email,
			User_password: hashedPassword,
      User_name: name,
      User_role: 'User'
		}
	});

  const token = jwt.sign({ id: user.User_ID }, 'db-project');
	cookies.set('token', token, {
		sameSite: 'lax',
		path: '/'
	});

  return new json({ token });
};

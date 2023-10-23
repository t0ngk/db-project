
import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const GET = async ({ params }) => {
  const { id} = params;
  const user = await prisma.user.findFirst({
    where: {
      User_ID: Number(id)
    }
  });

  if (!user) {
    throw new error('400', 'Unauth');
  }

  return new json(user);
}

export const PATCH = async ({ request, params }) => {
  const { id } = params;
  const info = await request.json();
  const req = await prisma.user.update({
    where: {
      User_ID: Number(id)
    },
    data: {
      User_name: info.User_name,
      User_email: info.User_email,
      User_tel: info.User_tel,
      User_role: info.User_role,
    }
  });
  return json({
    message: 'success'
  });
}

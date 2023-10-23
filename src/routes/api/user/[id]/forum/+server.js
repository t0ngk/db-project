
import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async ({ params }) => {
  const { id} = params;
  const forum = await prisma.forum.findMany({
    where: {
      User_ID: Number(id)
    },
    include: {
      User: true
    }
  });
  
  if (!forum) {
    throw new error('400', 'Unauth');
  }

  return new json(forum);
}


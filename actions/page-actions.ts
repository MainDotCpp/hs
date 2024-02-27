'use server';

import { PrismaClient, t_page } from '@prisma/client';

export const savePage = async (page: t_page) => {
  const client = new PrismaClient();
  await client.t_page.update({
    // @ts-ignore
    data: page,
    where: {
      id: page.id,
    },
  });
};

'use server';

import { t_page } from '@prisma/client';
import { mainDb } from '@/prisma/main-db';

export const savePage = async (page: t_page) => {
  await mainDb.t_page.update({
    // @ts-ignore
    data: page,
    where: {
      id: page.id,
    },
  });
};

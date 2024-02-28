'use server';

import { PrismaClient } from '@prisma/client';
import { mainDb } from '@/prisma/main-db';

export const logVisit = async (pageId: string, permit: boolean) => {
  const page = await mainDb.t_page.findFirst({
    where: {
      id: pageId,
    },
  });
  if (!page) return;
  if (permit) {
    page.access_count += 1;
  } else {
    page.ban_count += 1;
  }
  await mainDb.t_page.update({
    data: {
      id: page.id,
      click_link_count: page.click_link_count,
      access_count: page.access_count,
      ban_count: page.ban_count,
    },
    where: {
      id: pageId,
    },
  });
};
export const logClick = async (pageId: string) => {
  await mainDb.t_page.update({
    data: {
      click_link_count: {
        increment: 1,
      },
    },
    where: { id: pageId },
  });
};

'use server';

import { PrismaClient, t_page } from '@prisma/client';
import { mainDb } from '@/prisma/main-db';
import { v4 as uuidV4 } from 'uuid';

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

export const createPage = async (page: t_page) => {
  page.id = uuidV4();
  console.log(`[创建页面] ${JSON.stringify(page)}`);
  await mainDb.t_page.create({
    data: page,
  });
};

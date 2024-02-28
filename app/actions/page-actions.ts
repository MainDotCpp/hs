'use server';

import { PrismaClient } from '@prisma/client';

export const logVisit = async (pageId: string, permit: boolean) => {
  const prisma = new PrismaClient();
  const page = await prisma.t_page.findFirst({
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
  await prisma.t_page.update({
    data: page,
    where: {
      id: pageId,
    },
  });
};
export const logClick = async (pageId: string) => {
  const prisma = new PrismaClient();
  const page = await prisma.t_page.findUnique({
    where: {
      id: pageId,
    },
  });
  if (!page) return;
  page.click_link_count += 1;
  await prisma.t_page.update({
    data: page,
    where: { id: pageId },
  });
};

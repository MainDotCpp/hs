'use server';
import { PrismaClient } from '@prisma/client';

export const getPage = async (pageId: string) => {
  'use server';
  console.log(`[获取页面数据]pageId=${pageId}`);
  const prisma = new PrismaClient();
  return prisma.t_page.findFirst({
    where: {
      id: pageId,
    },
  });
};

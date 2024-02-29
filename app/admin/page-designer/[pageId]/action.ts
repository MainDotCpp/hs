'use server';
import { mainDb } from '@/prisma/main-db';

export const getPage = async (pageId: string) => {
  'use server';
  console.log(`[获取页面数据]pageId=${pageId}`);
  return mainDb.t_page.findFirst({
    where: {
      id: pageId,
    },
  });
};

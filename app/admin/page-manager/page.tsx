import { PrismaClient } from '@prisma/client';
import PageCard from './components/page-card';
import ToolBar from '@/app/admin/page-manager/tool-bar';
import { useRequest } from 'ahooks';

const getPageList = async () => {
  'use server';
  const prisma = new PrismaClient();
  const pages = await prisma.t_page.findMany();
  return pages;
};
const PageManager = async () => {
  const pages = await getPageList();

  return (
    <>
      <ToolBar />
      <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2'>
        {pages.length === 0 && <div>暂无页面</div>}
        {pages.map((page) => {
          return <PageCard key={page.id} page={page} />;
        })}
      </div>
    </>
  );
};

export default PageManager;

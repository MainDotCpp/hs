import PageCard from './components/page-card';
import ToolBar from '@/app/admin/page-manager/tool-bar';
import { mainDb } from '@/prisma/main-db';

const getPageList = async () => {
  'use server';
  const pages = await mainDb.t_page.findMany();
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

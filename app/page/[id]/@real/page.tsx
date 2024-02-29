import { getPage } from '@/app/admin/page-designer/[pageId]/action';
import PageRender from '@/app/components/page-render';
import Head from 'next/head';
import React from 'react';

const RealPage = async ({ params: { id } }: { params: { id: string } }) => {
  const page = await getPage(id);
  if (!page) return <div>页面不存在</div>;
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <title>{page.title}</title>
      <PageRender pageId={id} pageData={page} />
    </main>
  );
};

export default RealPage;

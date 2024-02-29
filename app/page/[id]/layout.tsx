import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { logVisit } from '@/app/actions/page-actions';
import { getPage } from '@/app/admin/page-designer/[pageId]/action';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {};

const RootLayout = async ({
  real,
  normal,
  params: { id: pageId },
}: {
  params: { id: string };
  real: React.ReactNode;
  normal: React.ReactNode;
}) => {
  // 获取ip
  // const res = await fetch('http://localhost:3000/api/user-info', {
  //   method: 'POST',
  // });
  // const resJson = await res.json();
  // logVisit(pageId, resJson.premit).then();
  return (
    <>
      <div className='bg-white'>{real}</div>
    </>
  );
};

export default RootLayout;

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { logVisit } from '@/app/actions/page-actions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '落地页',
};

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
  const res = await fetch('http://localhost:3000/api/user-info', {
    method: 'POST',
  });
  const resJson = await res.json();
  console.log(resJson);
  logVisit(pageId, resJson.premit).then();
  return <div className='bg-white'>{real}</div>;
};

export default RootLayout;

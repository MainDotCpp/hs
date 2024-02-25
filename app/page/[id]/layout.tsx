import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '落地页',
}

const RootLayout = async ({
  real,
  normal,
}: {
  real: React.ReactNode
  normal: React.ReactNode
}) => {
  // 获取ip
  return <div>{real}</div>
}

export default RootLayout

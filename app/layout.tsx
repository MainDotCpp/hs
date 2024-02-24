import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { log } from "console";
import { NextRequest } from "next/server";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const getData = async () => {
  'use server'
  console.log('hahah');
  
  return {premit:true}
}


const RootLayout =  async ({
  real,
  normal,
}:{real:React.ReactNode,normal:React.ReactNode}) => {
  return (
    <html lang="en">
      <body className={inter.className}>{real}</body>
    </html>
  );
}

export default RootLayout
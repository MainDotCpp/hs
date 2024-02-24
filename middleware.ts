import { PrismaClient } from "@prisma/client";
import { NextFetchEvent, NextRequest, NextResponse, userAgent } from "next/server";

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(req);
  console.log(req.headers);
  console.log(JSON.stringify(req));
  const agent = userAgent(req)
  
  let {headers} = req
  
}
  export const config = {
    matcher: '/',
  }
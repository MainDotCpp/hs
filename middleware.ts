import { log } from "console";
import { NextFetchEvent, NextRequest, NextResponse, userAgent } from "next/server";

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(req.ip);
  
  let {headers} = req
  
}
  export const config = {
    matcher: '/',
  }
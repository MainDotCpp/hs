import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse, userAgent } from 'next/server';
import { mainDb } from '@/prisma/main-db';

export const POST = async (req: NextRequest) => {
  const agent = userAgent(req);
  let { headers } = req;
  await mainDb.t_visit_log.create({
    data: {
      host: agent.browser.name,
      user_agent: agent.engine.name,
      language: agent.device.model,
      sec_ch_ua_platform: headers.get('sec-ch-ua-platform'),
    },
  });
  return NextResponse.json({ premit: true });
};

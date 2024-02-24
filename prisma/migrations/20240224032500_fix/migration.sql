/*
  Warnings:

  - You are about to drop the column `sec_ch_ua_platgform` on the `t_visit_log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "t_visit_log" DROP COLUMN "sec_ch_ua_platgform",
ADD COLUMN     "sec_ch_ua_platform" TEXT;

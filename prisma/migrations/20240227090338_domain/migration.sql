-- AlterTable
ALTER TABLE "t_page" ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "content" SET DEFAULT '[]';

-- CreateTable
CREATE TABLE "t_domain" (
    "id" UUID NOT NULL,
    "domain" VARCHAR(255) NOT NULL,
    "area" VARCHAR(255) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "create_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_domain_pkey" PRIMARY KEY ("id")
);

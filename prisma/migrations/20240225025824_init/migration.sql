-- CreateTable
CREATE TABLE "t_page" (
    "id" UUID NOT NULL,
    "title" VARCHAR(32),
    "create_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "ban_redirect_link" VARCHAR(255),
    "ban_count" INTEGER NOT NULL DEFAULT 0,
    "access_count" INTEGER NOT NULL DEFAULT 0,
    "content" JSON,

    CONSTRAINT "t_page_pkey" PRIMARY KEY ("id")
);

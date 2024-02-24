-- CreateTable
CREATE TABLE "t_visit_log" (
    "id" SERIAL NOT NULL,
    "user_agent" TEXT,
    "language" TEXT,
    "host" TEXT,
    "sec_ch_ua_platgform" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_visit_log_pkey" PRIMARY KEY ("id")
);

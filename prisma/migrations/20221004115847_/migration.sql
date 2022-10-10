-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(255) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

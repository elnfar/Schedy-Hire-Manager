/*
  Warnings:

  - Made the column `salary` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "salary" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "jobId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

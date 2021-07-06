/*
  Warnings:

  - Made the column `operator` on table `players` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `players` MODIFY `operator` VARCHAR(191) NOT NULL;

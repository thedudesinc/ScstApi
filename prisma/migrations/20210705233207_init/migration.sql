/*
  Warnings:

  - Added the required column `rosterPosition` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `players` ADD COLUMN `rosterPosition` VARCHAR(191) NOT NULL;

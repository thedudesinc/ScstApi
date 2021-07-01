/*
  Warnings:

  - You are about to alter the column `matchId` on the `teamkills` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `teamkills` MODIFY `matchId` INTEGER NOT NULL;

/*
  Warnings:

  - You are about to drop the column `matchOutcome` on the `matches` table. All the data in the column will be lost.
  - Added the required column `blueScore` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orangeScore` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owMatchId` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `matches` DROP COLUMN `matchOutcome`,
    ADD COLUMN `blueScore` INTEGER NOT NULL,
    ADD COLUMN `orangeScore` INTEGER NOT NULL,
    ADD COLUMN `owMatchId` VARCHAR(191) NOT NULL;

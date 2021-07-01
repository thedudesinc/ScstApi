/*
  Warnings:

  - You are about to drop the column `isVictory` on the `matches` table. All the data in the column will be lost.
  - You are about to drop the column `matchId` on the `matches` table. All the data in the column will be lost.
  - You are about to drop the column `matchType` on the `matches` table. All the data in the column will be lost.
  - You are about to drop the column `matchType` on the `teamkills` table. All the data in the column will be lost.
  - Added the required column `gameMatchId` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameMode` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `map` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matchOutcome` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `matches` DROP COLUMN `isVictory`,
    DROP COLUMN `matchId`,
    DROP COLUMN `matchType`,
    ADD COLUMN `gameMatchId` VARCHAR(191) NOT NULL,
    ADD COLUMN `gameMode` VARCHAR(191) NOT NULL,
    ADD COLUMN `map` VARCHAR(191) NOT NULL,
    ADD COLUMN `matchOutcome` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `teamkills` DROP COLUMN `matchType`,
    ALTER COLUMN `round` DROP DEFAULT;

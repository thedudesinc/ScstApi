/*
  Warnings:

  - You are about to drop the column `players` on the `matches` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `matches` DROP COLUMN `players`,
    ALTER COLUMN `roundsPlayed` DROP DEFAULT;

-- CreateTable
CREATE TABLE `players` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `matchId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `team` VARCHAR(191) NOT NULL,
    `operator` VARCHAR(191) NOT NULL,
    `kills` INTEGER NOT NULL,
    `headshots` INTEGER NOT NULL,
    `deaths` INTEGER NOT NULL,
    `score` INTEGER NOT NULL,
    `defuser` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

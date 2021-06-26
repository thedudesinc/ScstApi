-- CreateTable
CREATE TABLE `teamkills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `matchId` VARCHAR(191) NOT NULL,
    `matchType` VARCHAR(191) NOT NULL,
    `offender` VARCHAR(191) NOT NULL,
    `victim` VARCHAR(191) NOT NULL,
    `round` INTEGER NOT NULL DEFAULT 1,
    `offenderOperator` VARCHAR(191) NOT NULL,
    `victimOperator` VARCHAR(191) NOT NULL,
    `offenderKD` VARCHAR(191) NOT NULL,
    `victimKD` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `matches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `matchId` VARCHAR(191) NOT NULL,
    `matchType` VARCHAR(191) NOT NULL,
    `players` VARCHAR(191) NOT NULL,
    `isVictory` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

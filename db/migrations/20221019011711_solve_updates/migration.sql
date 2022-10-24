-- CreateTable
CREATE TABLE `SolveSession` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `problemId` VARCHAR(191) NOT NULL,
    `protocolId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Problem` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `imageURL` VARCHAR(191) NOT NULL,
    `headline` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `background` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Protocol` (
    `id` VARCHAR(191) NOT NULL,
    `duration` DATETIME(3) NOT NULL,
    `participantFee` DECIMAL(10, 2) NOT NULL,
    `judgeFee` DECIMAL(10, 2) NOT NULL,
    `solvetherFee` DECIMAL(10, 2) NOT NULL,
    `rewardPool` DECIMAL(10, 2) NOT NULL,
    `judgeNumber` INTEGER NOT NULL,
    `participantNumber` INTEGER NOT NULL,
    `audienceAllowed` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

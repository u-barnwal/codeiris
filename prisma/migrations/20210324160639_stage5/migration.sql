-- AlterTable
ALTER TABLE `Post` MODIFY `type` ENUM('link', 'ask', 'job') NOT NULL DEFAULT 'link';

-- AlterTable
ALTER TABLE `User` ADD COLUMN     `role` ENUM('admin', 'moderator', 'user') NOT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE `Flag` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `moderatorId` VARCHAR(191),
    `userId` VARCHAR(191),
    `postId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Flag` ADD FOREIGN KEY (`moderatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flag` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flag` ADD FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

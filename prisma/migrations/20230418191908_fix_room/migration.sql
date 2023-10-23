-- DropForeignKey
ALTER TABLE `Appointment` DROP FOREIGN KEY `Appointment_Room_ID_fkey`;

-- AlterTable
ALTER TABLE `Appointment` MODIFY `Room_ID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_Room_ID_fkey` FOREIGN KEY (`Room_ID`) REFERENCES `Room`(`Room_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

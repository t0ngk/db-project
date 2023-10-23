/*
  Warnings:

  - You are about to drop the column `Status` on the `Appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `Status`,
    ADD COLUMN `Appointment_status` ENUM('Pending', 'Approved', 'Rejected') NULL;

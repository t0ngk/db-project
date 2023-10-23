-- CreateTable
CREATE TABLE `User` (
    `User_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `User_name` VARCHAR(191) NOT NULL,
    `User_email` VARCHAR(191) NOT NULL,
    `User_password` VARCHAR(191) NOT NULL,
    `User_tel` VARCHAR(191) NULL,
    `User_role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`User_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pet` (
    `Pet_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Pet_name` VARCHAR(191) NOT NULL,
    `Pet_DOB` DATETIME(3) NULL,
    `Pet_type` VARCHAR(191) NOT NULL,
    `Pet_species` VARCHAR(191) NOT NULL,
    `Pet_gender` VARCHAR(191) NOT NULL,
    `Pet_description` VARCHAR(191) NULL,
    `User_ID` INTEGER NOT NULL,

    PRIMARY KEY (`Pet_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointment` (
    `Appointment_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Appointment_date` DATETIME(3) NOT NULL,
    `Appointment_time` VARCHAR(191) NOT NULL,
    `Case_ID` INTEGER NOT NULL,
    `Room_ID` INTEGER NOT NULL,

    UNIQUE INDEX `Appointment_Case_ID_key`(`Case_ID`),
    PRIMARY KEY (`Appointment_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `Room_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Room_name` VARCHAR(191) NOT NULL,
    `Room_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Room_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Case` (
    `Case_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Pet_ID` INTEGER NOT NULL,
    `State_ID` INTEGER NOT NULL,
    `Service_ID` INTEGER NOT NULL,

    UNIQUE INDEX `Case_Pet_ID_key`(`Pet_ID`),
    UNIQUE INDEX `Case_State_ID_key`(`State_ID`),
    PRIMARY KEY (`Case_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `State` (
    `State_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `State_detail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`State_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Forum` (
    `Forum_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Forum_title` VARCHAR(191) NOT NULL,
    `Forum_content` VARCHAR(191) NOT NULL,
    `Forum_created` DATETIME(3) NOT NULL,
    `User_ID` INTEGER NOT NULL,

    PRIMARY KEY (`Forum_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `Comment_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Comment_detail` VARCHAR(191) NOT NULL,
    `Comment_created` DATETIME(3) NOT NULL,
    `User_ID` INTEGER NULL,
    `Forum_ID` INTEGER NULL,

    PRIMARY KEY (`Comment_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recuperate` (
    `Recuperation_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Start_date` DATETIME(3) NOT NULL,
    `End_date` DATETIME(3) NULL,
    `State_ID` INTEGER NOT NULL,

    UNIQUE INDEX `Recuperate_State_ID_key`(`State_ID`),
    PRIMARY KEY (`Recuperation_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `Service_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Service_name` VARCHAR(191) NOT NULL,
    `Service_type` ENUM('Grooming', 'Boarding', 'Training', 'Others') NOT NULL,

    PRIMARY KEY (`Service_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pet` ADD CONSTRAINT `Pet_User_ID_fkey` FOREIGN KEY (`User_ID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_Case_ID_fkey` FOREIGN KEY (`Case_ID`) REFERENCES `Case`(`Case_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_Room_ID_fkey` FOREIGN KEY (`Room_ID`) REFERENCES `Room`(`Room_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_Pet_ID_fkey` FOREIGN KEY (`Pet_ID`) REFERENCES `Pet`(`Pet_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_State_ID_fkey` FOREIGN KEY (`State_ID`) REFERENCES `State`(`State_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_Service_ID_fkey` FOREIGN KEY (`Service_ID`) REFERENCES `Service`(`Service_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forum` ADD CONSTRAINT `Forum_User_ID_fkey` FOREIGN KEY (`User_ID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_User_ID_fkey` FOREIGN KEY (`User_ID`) REFERENCES `User`(`User_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_Forum_ID_fkey` FOREIGN KEY (`Forum_ID`) REFERENCES `Forum`(`Forum_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recuperate` ADD CONSTRAINT `Recuperate_State_ID_fkey` FOREIGN KEY (`State_ID`) REFERENCES `State`(`State_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

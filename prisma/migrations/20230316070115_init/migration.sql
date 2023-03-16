/*
  Warnings:

  - You are about to drop the `userevenement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userhasvehicule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `userevenement` DROP FOREIGN KEY `userEvenement_evenId_fkey`;

-- DropForeignKey
ALTER TABLE `userevenement` DROP FOREIGN KEY `userEvenement_userId_fkey`;

-- DropForeignKey
ALTER TABLE `userhasvehicule` DROP FOREIGN KEY `userhasVehicule_docuId_fkey`;

-- DropForeignKey
ALTER TABLE `userhasvehicule` DROP FOREIGN KEY `userhasVehicule_userId_fkey`;

-- AlterTable
ALTER TABLE `assurance` MODIFY `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel';

-- AlterTable
ALTER TABLE `evenements` MODIFY `typeEven` ENUM('Accident', 'Station_Interdite', 'Incident', 'denonciation') NOT NULL DEFAULT 'denonciation';

-- DropTable
DROP TABLE `userevenement`;

-- DropTable
DROP TABLE `userhasvehicule`;

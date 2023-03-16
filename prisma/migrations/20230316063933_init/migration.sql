/*
  Warnings:

  - You are about to drop the column `permisId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `permis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_permisId_fkey`;

-- AlterTable
ALTER TABLE `assurance` MODIFY `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel';

-- AlterTable
ALTER TABLE `evenements` MODIFY `typeEven` ENUM('Accident', 'Station_Interdite', 'Incident', 'denonciation') NOT NULL DEFAULT 'denonciation';

-- AlterTable
ALTER TABLE `user` DROP COLUMN `permisId`;

-- DropTable
DROP TABLE `permis`;

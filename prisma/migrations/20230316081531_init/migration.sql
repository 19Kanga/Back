/*
  Warnings:

  - You are about to drop the column `roleId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_roleId_fkey`;

-- AlterTable
ALTER TABLE `assurance` MODIFY `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel';

-- AlterTable
ALTER TABLE `evenements` MODIFY `typeEven` ENUM('Accident', 'Station_Interdite', 'Incident', 'denonciation') NOT NULL DEFAULT 'denonciation';

-- AlterTable
ALTER TABLE `user` DROP COLUMN `roleId`,
    ADD COLUMN `role` ENUM('USER', 'ADMIN', 'ASSURANCE', 'CONTROLEUR', 'FMO') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `role`;

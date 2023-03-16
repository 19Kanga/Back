/*
  Warnings:

  - You are about to drop the column `departement` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `region` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `assurance` MODIFY `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel';

-- AlterTable
ALTER TABLE `evenements` MODIFY `typeEven` ENUM('Accident', 'Station_Interdite', 'Incident', 'denonciation') NOT NULL DEFAULT 'denonciation';

-- AlterTable
ALTER TABLE `user` DROP COLUMN `departement`,
    DROP COLUMN `region`;

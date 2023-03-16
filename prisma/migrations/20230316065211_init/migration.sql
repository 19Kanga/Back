-- AlterTable
ALTER TABLE `assurance` MODIFY `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel';

-- AlterTable
ALTER TABLE `evenements` MODIFY `typeEven` ENUM('Accident', 'Station_Interdite', 'Incident', 'denonciation') NOT NULL DEFAULT 'denonciation';

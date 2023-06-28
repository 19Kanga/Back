-- AlterTable
ALTER TABLE `assurance` MODIFY `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel';

-- AlterTable
ALTER TABLE `controleurp` MODIFY `numPerm` ENUM('VALIDE', 'INVALIDE', 'EN_COUR') NOT NULL DEFAULT 'VALIDE';

-- AlterTable
ALTER TABLE `controleurv` MODIFY `numCarteG` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE',
    MODIFY `numAssurance` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE',
    MODIFY `numCtrlTech` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE';

-- AlterTable
ALTER TABLE `employes` MODIFY `statut` ENUM('Repos', 'Mission', 'Admin') NOT NULL DEFAULT 'Admin';

-- AlterTable
ALTER TABLE `entreprises` MODIFY `roles` ENUM('CONTROLEUR', 'DOCUMENTATION') NOT NULL DEFAULT 'DOCUMENTATION',
    MODIFY `etat` ENUM('ACTIVE', 'DESACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `evenements` MODIFY `typeEven` ENUM('Accident', 'Station_Interdite', 'Incident', 'denonciation') NOT NULL DEFAULT 'denonciation';

-- AlterTable
ALTER TABLE `user` ADD COLUMN `profile` VARCHAR(191) NULL,
    MODIFY `role` ENUM('USER', 'ADMIN', 'ASSURANCE', 'CONTROLEUR', 'FMO') NOT NULL DEFAULT 'USER',
    MODIFY `statut` ENUM('Repos', 'Mission', 'Admin') NOT NULL DEFAULT 'Admin';

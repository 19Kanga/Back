-- AlterTable
ALTER TABLE `assurance` MODIFY `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel';

-- AlterTable
ALTER TABLE `controleurp` MODIFY `numPerm` ENUM('VALIDE', 'INVALIDE', 'EN_COUR') NOT NULL DEFAULT 'VALIDE';

-- AlterTable
ALTER TABLE `controleurv` MODIFY `numCarteG` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE',
    MODIFY `numAssurance` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE',
    MODIFY `numCtrlTech` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE';

-- AlterTable
ALTER TABLE `employes` MODIFY `nom` VARCHAR(191) NULL,
    MODIFY `prenom` VARCHAR(191) NULL,
    MODIFY `dateNaiss` DATETIME(3) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `telephone` VARCHAR(191) NULL,
    MODIFY `telephone1` VARCHAR(191) NULL,
    MODIFY `adresse` VARCHAR(191) NULL,
    MODIFY `statut` ENUM('Repos', 'Mission', 'Admin') NOT NULL DEFAULT 'Admin';

-- AlterTable
ALTER TABLE `entreprises` MODIFY `telephone` VARCHAR(191) NULL,
    MODIFY `adresse` VARCHAR(191) NULL,
    MODIFY `roles` ENUM('CONTROLEUR', 'DOCUMENTATION') NOT NULL DEFAULT 'DOCUMENTATION',
    MODIFY `etat` ENUM('ACTIVE', 'DESACTIVE') NOT NULL DEFAULT 'ACTIVE',
    MODIFY `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `evenements` MODIFY `typeEven` ENUM('Accident', 'Station_Interdite', 'Incident', 'denonciation') NOT NULL DEFAULT 'denonciation';

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('USER', 'ADMIN', 'ASSURANCE', 'CONTROLEUR', 'FMO') NOT NULL DEFAULT 'USER',
    MODIFY `statut` ENUM('Repos', 'Mission', 'Admin') NOT NULL DEFAULT 'Admin';

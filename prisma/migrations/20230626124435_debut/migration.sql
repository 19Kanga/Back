-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN', 'ASSURANCE', 'CONTROLEUR', 'FMO') NOT NULL DEFAULT 'USER',
    `entreprise` VARCHAR(191) NULL,
    `detailEntr` VARCHAR(191) NULL,
    `villeControle` VARCHAR(191) NULL,
    `lieuxControle` VARCHAR(191) NULL,
    `statut` ENUM('Repos', 'Mission', 'Admin') NOT NULL DEFAULT 'Admin',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `employesId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permis` (
    `id` VARCHAR(191) NOT NULL,
    `thumb` VARCHAR(191) NULL,
    `numPermis` VARCHAR(191) NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `dateNais` DATETIME(3) NOT NULL,
    `villeNais` VARCHAR(191) NULL,
    `addresse` VARCHAR(191) NULL,
    `categorie` VARCHAR(191) NOT NULL,
    `dateDeliv` DATETIME(3) NOT NULL,
    `dateExp` DATETIME(3) NOT NULL,

    UNIQUE INDEX `permis_numPermis_key`(`numPermis`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicule` (
    `id` VARCHAR(191) NOT NULL,
    `numSerie` VARCHAR(191) NOT NULL,
    `nomV` VARCHAR(191) NOT NULL,
    `typeVehicId` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `docuId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `vehicule_numSerie_key`(`numSerie`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controleurV` (
    `id` VARCHAR(191) NOT NULL,
    `dateControle` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `numCarteG` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE',
    `numAssurance` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE',
    `numCtrlTech` ENUM('VALIDE', 'INVALIDE') NOT NULL DEFAULT 'INVALIDE',
    `userId` VARCHAR(191) NOT NULL,
    `idVehicule` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `controleurP` (
    `id` VARCHAR(191) NOT NULL,
    `dateControle` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `numPerm` ENUM('VALIDE', 'INVALIDE', 'EN_COUR') NOT NULL DEFAULT 'VALIDE',
    `userId` VARCHAR(191) NOT NULL,
    `permisId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `typeVehicule` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documentation` (
    `id` VARCHAR(191) NOT NULL,
    `docId` VARCHAR(191) NOT NULL,
    `assuranceId` VARCHAR(191) NOT NULL,
    `ctrlTechId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carteGrise` (
    `id` VARCHAR(191) NOT NULL,
    `immatriculation` VARCHAR(191) NOT NULL,
    `modele` VARCHAR(191) NOT NULL,
    `marque` VARCHAR(191) NOT NULL,
    `nbrCheveaux` INTEGER NOT NULL,
    `hrsePower` VARCHAR(191) NULL,
    `nochasis` VARCHAR(191) NULL,
    `nbrPlace` INTEGER NOT NULL,
    `couleur` VARCHAR(191) NOT NULL,
    `typeCarburant` VARCHAR(191) NULL,
    `dateDelivr` DATETIME(3) NULL,
    `nbrCheveau` VARCHAR(191) NULL,
    `horsePower` VARCHAR(191) NULL,
    `nomP` VARCHAR(191) NULL,
    `adresseP` VARCHAR(191) NULL,
    `dateNais` DATETIME(3) NULL,
    `tel` INTEGER NULL,
    `permis` VARCHAR(191) NULL,
    `anneeC` VARCHAR(191) NULL,

    UNIQUE INDEX `carteGrise_immatriculation_key`(`immatriculation`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assurance` (
    `id` VARCHAR(191) NOT NULL,
    `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel',
    `typeCouverture` VARCHAR(191) NOT NULL,
    `deductible` VARCHAR(191) NULL,
    `franchise` VARCHAR(191) NULL,
    `primeMensuel` VARCHAR(191) NULL,
    `registrationOn` DATETIME(3) NOT NULL,
    `expDate` DATETIME(3) NOT NULL,
    `nameOfAssurance` VARCHAR(191) NULL,
    `photoAss` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ctrlTechnique` (
    `id` VARCHAR(191) NOT NULL,
    `dateCtrl` DATETIME(3) NOT NULL,
    `prochaineVisite` DATETIME(3) NOT NULL,
    `resultat` VARCHAR(191) NULL,
    `nomEntreprise` VARCHAR(191) NULL,
    `photoCtrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evenements` (
    `id` VARCHAR(191) NOT NULL,
    `typeEven` ENUM('Accident', 'Station_Interdite', 'Incident', 'denonciation') NOT NULL DEFAULT 'denonciation',
    `lieux` VARCHAR(191) NULL,
    `pieceJointe` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entreprises` (
    `id` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `nomEntreprise` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `roles` ENUM('CONTROLEUR', 'DOCUMENTATION') NOT NULL DEFAULT 'DOCUMENTATION',
    `etat` ENUM('ACTIVE', 'DESACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `create_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employes` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `dateNaiss` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `telephone1` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `villeControle` VARCHAR(191) NULL,
    `lieuxControle` VARCHAR(191) NULL,
    `religion` VARCHAR(191) NULL,
    `matrimonial` VARCHAR(191) NULL,
    `sexe` VARCHAR(191) NULL,
    `nbr_enfant` VARCHAR(191) NULL,
    `statut` ENUM('Repos', 'Mission', 'Admin') NOT NULL DEFAULT 'Admin',
    `entrepriseId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `villes` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quartier` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `villeId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_employesId_fkey` FOREIGN KEY (`employesId`) REFERENCES `employes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicule` ADD CONSTRAINT `vehicule_typeVehicId_fkey` FOREIGN KEY (`typeVehicId`) REFERENCES `typeVehicule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicule` ADD CONSTRAINT `vehicule_docuId_fkey` FOREIGN KEY (`docuId`) REFERENCES `documentation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controleurV` ADD CONSTRAINT `controleurV_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controleurV` ADD CONSTRAINT `controleurV_idVehicule_fkey` FOREIGN KEY (`idVehicule`) REFERENCES `vehicule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controleurP` ADD CONSTRAINT `controleurP_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `controleurP` ADD CONSTRAINT `controleurP_permisId_fkey` FOREIGN KEY (`permisId`) REFERENCES `permis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documentation` ADD CONSTRAINT `documentation_docId_fkey` FOREIGN KEY (`docId`) REFERENCES `carteGrise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documentation` ADD CONSTRAINT `documentation_assuranceId_fkey` FOREIGN KEY (`assuranceId`) REFERENCES `assurance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documentation` ADD CONSTRAINT `documentation_ctrlTechId_fkey` FOREIGN KEY (`ctrlTechId`) REFERENCES `ctrlTechnique`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employes` ADD CONSTRAINT `employes_entrepriseId_fkey` FOREIGN KEY (`entrepriseId`) REFERENCES `entreprises`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quartier` ADD CONSTRAINT `quartier_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `villes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

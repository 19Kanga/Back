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
    `region` VARCHAR(191) NULL,
    `departement` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `permisId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` VARCHAR(191) NOT NULL,
    `libelle` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permis` (
    `id` VARCHAR(191) NOT NULL,
    `nomProprietaire` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `dateNais` DATETIME(3) NOT NULL,
    `villeNais` VARCHAR(191) NULL,
    `addresse` VARCHAR(191) NULL,
    `categorie` VARCHAR(191) NOT NULL,
    `dateDeliv` DATETIME(3) NOT NULL,
    `dateExp` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicule` (
    `id` VARCHAR(191) NOT NULL,
    `nochasis` VARCHAR(191) NOT NULL,
    `marque` VARCHAR(191) NOT NULL,
    `immatriculation` VARCHAR(191) NOT NULL,
    `typeVehicId` VARCHAR(191) NOT NULL,
    `docuId` VARCHAR(191) NOT NULL,

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
    `dateDelivr` DATETIME(3) NOT NULL,
    `dateExp` DATETIME(3) NOT NULL,
    `nbrCheveaux` INTEGER NOT NULL,
    `hrsePower` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assurance` (
    `id` VARCHAR(191) NOT NULL,
    `from` VARCHAR(191) NULL,
    `to` VARCHAR(191) NOT NULL,
    `typeVeh` ENUM('Tourisme', 'agence_voyage', 'personnel', 'entreprise') NOT NULL DEFAULT 'personnel',
    `registrationOn` DATETIME(3) NOT NULL,
    `insuredName` VARCHAR(191) NULL,
    `nameOfAssurance` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ctrlTechnique` (
    `id` VARCHAR(191) NOT NULL,
    `dateCtrl` DATETIME(3) NOT NULL,
    `resultat` VARCHAR(191) NULL,
    `prochaineVisite` DATETIME(3) NOT NULL,
    `nomEntreprise` VARCHAR(191) NULL,
    `villeCtrl` VARCHAR(191) NULL,
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
CREATE TABLE `userhasVehicule` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `docuId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userEvenement` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `evenId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_permisId_fkey` FOREIGN KEY (`permisId`) REFERENCES `permis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicule` ADD CONSTRAINT `vehicule_typeVehicId_fkey` FOREIGN KEY (`typeVehicId`) REFERENCES `typeVehicule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicule` ADD CONSTRAINT `vehicule_docuId_fkey` FOREIGN KEY (`docuId`) REFERENCES `documentation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documentation` ADD CONSTRAINT `documentation_docId_fkey` FOREIGN KEY (`docId`) REFERENCES `carteGrise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documentation` ADD CONSTRAINT `documentation_assuranceId_fkey` FOREIGN KEY (`assuranceId`) REFERENCES `assurance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documentation` ADD CONSTRAINT `documentation_ctrlTechId_fkey` FOREIGN KEY (`ctrlTechId`) REFERENCES `ctrlTechnique`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userhasVehicule` ADD CONSTRAINT `userhasVehicule_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userhasVehicule` ADD CONSTRAINT `userhasVehicule_docuId_fkey` FOREIGN KEY (`docuId`) REFERENCES `documentation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userEvenement` ADD CONSTRAINT `userEvenement_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userEvenement` ADD CONSTRAINT `userEvenement_evenId_fkey` FOREIGN KEY (`evenId`) REFERENCES `evenements`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createVoiture = async (data, callback) => {
  try {
    const voiture = await prisma.voiture.create ({
      data: data,
    });
    callback (null, voiture);
  } catch (err) {
    callback (err, null);
  }
};

const readVoiture = async callback => {
  try {
    const Voitures = await prisma.voiture.findMany (
      {
        // include: {
        //   documentation: {
        //     select: {
        //       carteGrise: true,
        //       ctrlTechnique: true,
        //       assurance: true,
        //     },
        //   },
        // },
      }
    );
    callback (null, Voitures);
  } catch (err) {
    callback (err, null);
  }
};

const readVoitureById = async (id, callback) => {
  try {
    const Voiture = await prisma.voiture.findUnique ({
      where: {id},
      select: {
        id: true,
        docuId: true,
        nomV: true,
        numSerie: true,
        photo: true,
        typeVehicId: true,
        // documentation: {
        //   select: {
        //     carteGrise: true,
        //     ctrlTechnique: true,
        //     assurance: true,
        //   },
        // },
      },
    });
    callback (null, Voiture);
  } catch (err) {
    callback (err, null);
  }
};

const updateVoiture = async (data, callback) => {
  try {
    const Voiture = await prisma.voiture.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Voiture);
  } catch (err) {
    callback (err, null);
  }
};

const deleteVoiture = async (id, callback) => {
  try {
    const Voiture = await prisma.voiture.delete ({
      where: {id},
    });
    callback (null, Voiture);
  } catch (err) {
    callback (err, null);
  }
};

// const ChercheDoc = async (callback) => {
//   try {
//     const Voiture = await prisma.voiture.findUnique ().
//     callback (null, Voiture);
//   } catch (err) {
//     callback (err, null);
//   }
// }

module.exports = {
  createVoiture,
  readVoiture,
  readVoitureById,
  updateVoiture,
  deleteVoiture,
};

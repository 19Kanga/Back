const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createQuartier = async (data, callback) => {
  try {
    const Quartier = await prisma.quartier.create ({
      data: data,
    });
    callback (null, Quartier);
  } catch (err) {
    callback (err, null);
  }
};

const readQuartier = async callback => {
  try {
    const Quartiers = await prisma.quartier.findMany ();
    callback (null, Quartiers);
  } catch (err) {
    callback (err, null);
  }
};

const readQuartierById = async (id, callback) => {
  try {
    const Quartier = await prisma.quartier.findUnique ({where: {id}});
    callback (null, Quartier);
  } catch (err) {
    callback (err, null);
  }
};

const updateQuartier = async (data, callback) => {
  try {
    const Quartier = await prisma.quartier.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Quartier);
  } catch (err) {
    callback (err, null);
  }
};

const deleteQuartier = async (id, callback) => {
  try {
    const Quartier = await prisma.quartier.delete ({
      where: {id},
    });
    callback (null, Quartier);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createQuartier,
  readQuartier,
  readQuartierById,
  updateQuartier,
  deleteQuartier,
};

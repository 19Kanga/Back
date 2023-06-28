const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createVille = async (data, callback) => {
  try {
    const Ville = await prisma.villes.create ({
      data: data,
    });
    callback (null, Ville);
  } catch (err) {
    callback (err, null);
  }
};
const readVille = async callback => {
  try {
    const Villes = await prisma.villes.findMany ();
    callback (null, Villes);
  } catch (err) {
    callback (err, null);
  }
};

const readVilleById = async (id, callback) => {
  try {
    const Ville = await prisma.villes.findUnique ({where: {id}});
    callback (null, Ville);
  } catch (err) {
    callback (err, null);
  }
};

const updateVille = async (data, callback) => {
  try {
    const Ville = await prisma.villes.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Ville);
  } catch (err) {
    callback (err, null);
  }
};

const deleteVille = async (id, callback) => {
  try {
    const Ville = await prisma.villes.delete ({
      where: {id},
    });
    callback (null, Ville);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createVille,
  readVille,
  readVilleById,
  updateVille,
  deleteVille,
};

const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createEntreprises = async (data, callback) => {
  try {
    const Entreprises = await prisma.entreprise.create ({
      data: data,
    });
    callback (null, Entreprises);
  } catch (err) {
    callback (err, null);
  }
};

const readEntreprises = async callback => {
  try {
    const Entreprisess = await prisma.entreprise.findMany ();
    callback (null, Entreprisess);
  } catch (err) {
    callback (err, null);
  }
};

const readEntreprisesById = async (id, callback) => {
  try {
    const Entreprises = await prisma.entreprise.findUnique ({where: {id}});
    callback (null, Entreprises);
  } catch (err) {
    callback (err, null);
  }
};
const readEntrepEmployeById = async (id, callback) => {
  try {
    const Entreprises = await prisma.$queryRaw`SELECT entreprises.* FROM entreprises,employes where employes.id=${id} AND employes.entrepriseId=entreprises.id LIMIT 1`;
    callback (null, Entreprises);
  } catch (err) {
    callback (err, null);
  }
};

const updateEntreprises = async (data, callback) => {
  try {
    const Entreprises = await prisma.entreprise.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Entreprises);
  } catch (err) {
    callback (err, null);
  }
};

const deleteEntreprises = async (id, callback) => {
  try {
    const Entreprises = await prisma.entreprise.delete ({
      where: {id},
    });
    callback (null, Entreprises);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createEntreprises,
  readEntreprises,
  readEntreprisesById,
  updateEntreprises,
  deleteEntreprises,
  readEntrepEmployeById,
};

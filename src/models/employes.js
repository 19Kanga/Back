const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createEmploye = async (data, callback) => {
  try {
    const Employe = await prisma.employes.create ({
      data: data,
    });
    callback (null, Employe);
  } catch (err) {
    callback (err, null);
  }
};

const readEmploye = async callback => {
  try {
    const Employes = await prisma.employes.findMany ();
    callback (null, Employes);
  } catch (err) {
    callback (err, null);
  }
};

const readEmployeById = async (id, callback) => {
  try {
    const Employe = await prisma.employes.findUnique ({
      where: {id},
    });
    callback (null, Employe);
  } catch (err) {
    callback (err, null);
  }
};

const readUserEmployeById = async (id, callback) => {
  try {
    const Employe = await prisma.$queryRaw`SELECT employes.* FROM user,employes where user.id=${id} AND user.employesId=employes.id LIMIT 1`;
    callback (null, Employe);
  } catch (err) {
    callback (err, null);
  }
};

const updateEmploye = async (data, callback) => {
  try {
    const Employe = await prisma.employes.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Employe);
  } catch (err) {
    callback (err, null);
  }
};

const deleteEmploye = async (id, callback) => {
  try {
    const Employe = await prisma.employes.delete ({
      where: {id},
    });
    callback (null, Employe);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createEmploye,
  readEmploye,
  readEmployeById,
  updateEmploye,
  deleteEmploye,
  readUserEmployeById,
};

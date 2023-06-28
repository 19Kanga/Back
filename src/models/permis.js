const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createPermis = async (data, callback) => {
  try {
    const permis = await prisma.controlerP.create ({
      data: data,
    });
    callback (null, permis);
  } catch (err) {
    callback (err, null);
  }
};

const AllControleP = async (permisId, userId, callback) => {
  try {
    // const permis = await prisma.controlerP.findMany ({
    //   where: {
    //     permisId: permisId,
    //     userId: userId,
    //     dateControle: new Date (),
    //   },
    // });
    const permis = await prisma.$queryRaw`SELECT Distinct * FROM Controleurp where userId=${userId} and permisId=${permisId} AND DATE(dateControle)=DATE(NOW()) group by DATE(dateControle)`;
    callback (null, permis);
  } catch (err) {
    callback (err, null);
  }
};

const readPermis = async callback => {
  try {
    const permiss = await prisma.permisDeConduire.findMany ();
    callback (null, permiss);
  } catch (err) {
    callback (err, null);
  }
};

const readPermisById = async (id, callback) => {
  try {
    const permis = await prisma.permisDeConduire.findUnique ({where: {id}});
    callback (null, permis);
  } catch (err) {
    callback (err, null);
  }
};
const readPermisByNumPermis = async (id, callback) => {
  try {
    const permis = await prisma.permisDeConduire.findUnique ({
      where: {numPermis: id},
    });
    callback (null, permis);
  } catch (err) {
    callback (err, null);
  }
};

const updatePermis = async (data, id, callback) => {
  try {
    const permis = await prisma.controlerP.update ({
      data: data,
      where: {id: id},
    });
    callback (null, permis);
  } catch (err) {
    callback (err, null);
  }
};

const deletePermis = async (id, callback) => {
  try {
    const permis = await prisma.permisDeConduire.delete ({
      where: {id},
    });
    callback (null, permis);
  } catch (err) {
    callback (err, null);
  }
};

const readPermisByUserId = async (id, callback) => {
  try {
    const permis = await prisma.controlerP.findMany ({
      where: {
        userId: id,
      },
    });
    callback (null, permis);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createPermis,
  readPermis,
  readPermisById,
  updatePermis,
  deletePermis,
  readPermisByNumPermis,
  readPermisByUserId,
  AllControleP,
};

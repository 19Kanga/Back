const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createControleV = async (data, callback) => {
  try {
    const controleV = await prisma.controlerV.create ({
      data: data,
    });
    callback (null, controleV);
  } catch (err) {
    callback (err, null);
  }
};

const readControleV = async callback => {
  try {
    const controleVs = await prisma.controlerV.findMany ();
    callback (null, controleVs);
  } catch (err) {
    callback (err, null);
  }
};

const readControleVById = async (id, callback) => {
  try {
    const controleV = await prisma.controlerV.findMany ({
      where: {
        userId: id,
      },
    });
    callback (null, controleV);
  } catch (err) {
    callback (err, null);
  }
};

const readAllVByDate = async (userI, callback) => {
  try {
    const controleV = await prisma.controlerV.count ({
      where: {
        userId: userI,
      },
    });
    const cv = await prisma.controlerV.count ({
      where: {
        userId: userI,
        AND: [
          {numAssurance: 'VALIDE'},
          {numCarteG: 'VALIDE'},
          {numCtrlTech: 'VALIDE'},
        ],
      },
    });
    const ci = await prisma.controlerV.count ({
      where: {
        // dateControle: id,
        // numAssurance:'INVALIDE',
        userId: userI,
        OR: [
          {numAssurance: 'INVALIDE'},
          {numCarteG: 'INVALIDE'},
          {numCtrlTech: 'INVALIDE'},
        ],
      },
    });
    callback (null, {controleV, cv, ci});
  } catch (err) {
    callback (err, null);
  }
};

const readControleVByDate = async (userId, callback) => {
  try {
    const controleV = await prisma.controlerV.findMany ({
      where: {
        userId: userId,
      },
    });
    callback (null, controleV);
  } catch (err) {
    callback (err, null);
  }
};

const selectLabel = async (id, callback) => {
  try {
    const Voiture = await prisma.$queryRaw`SELECT DISTINCT dateControle FROM Controleurv where userId=${id} group by DATE(dateControle) ORDER BY dateControle asc`;
    callback (null, Voiture);
  } catch (err) {
    callback (err, null);
  }
};

const selectAssu = async (id, callback) => {
  try {
    const Voiture = await prisma.controlerV.count ({
      where: {
        dateControle: id,
        numAssurance: 'VALIDE',
      },
    });
    callback (null, Voiture);
  } catch (err) {
    callback (err, null);
  }
};

const selectCtrl = async (id, callback) => {
  try {
    const Voiture = await prisma.controlerV.count ({
      where: {
        dateControle: id,
        numCtrlTech: 'VALIDE',
      },
    });
    callback (null, Voiture);
  } catch (err) {
    callback (err, null);
  }
};

const verifControle = async (id, userId, callback) => {
  try {
    // const Voiture = await prisma.controlerV.findMany ({
    //   where: {
    //     idVehicule: id,
    //     AND: [{userId: userId}, {dateControle: new Date ()}],
    //   },
    // });
    const Voiture = await prisma.$queryRaw`SELECT Distinct * FROM Controleurv where userId=${userId} and idVehicule=${id} AND DATE(dateControle)=DATE(NOW())`;
    callback (null, Voiture);
  } catch (err) {
    callback (err, null);
  }
};

const getAllControleA = async callback => {
  try {
    const Voiture = await prisma.$queryRaw`SELECT Controleurv.*, count(Date(dateControle)) as countid,user.firstname,user.lastname,user.profile FROM Controleurv,user where user.id=Controleurv.userId group by userId, DATE(dateControle)`;
    callback (null, Voiture);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createControleV,
  readControleV,
  readControleVById,
  readControleVByDate,
  readAllVByDate,
  selectLabel,
  selectAssu,
  selectCtrl,
  verifControle,
  getAllControleA,
};

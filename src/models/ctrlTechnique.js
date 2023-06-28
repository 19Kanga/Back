const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createCtrlT = async (data, callback) => {
  try {
    const CtrlT = await prisma.ctrlTechnique.create ({
      data: data,
    });
    callback (null, CtrlT);
  } catch (err) {
    callback (err, null);
  }
};

const readCtrlT = async callback => {
  try {
    const CtrlTs = await prisma.ctrlTechnique.findMany ({
      include: {
        Documentation: true,
      },
    });
    callback (null, CtrlTs);
  } catch (err) {
    callback (err, null);
  }
};

const readCtrlTById = async (id, callback) => {
  try {
    const CtrlT = await prisma.ctrlTechnique.findUnique ({
      where: {id},
      // include: {
      //   Documentation: true,
      // },
    });
    callback (null, CtrlT);
  } catch (err) {
    callback (err, null);
  }
};

const readCtrlTByDoc = async (id, callback) => {
  try {
    // const CtrlT = await prisma.ctrlTechnique.findMany ({
    //   where: {
    //     Documentation: {
    //       some: {
    //         id: id,
    //       },
    //     },
    //   },
    //   select: {
    //     prochaineVisite: true,
    //   },
    // });
    const CtrlT = await prisma.documentation
      .findUnique ({where: {id}})
      .ctrlTechnique ({select: {prochaineVisite: true}});
    callback (null, CtrlT);
  } catch (err) {
    callback (err, null);
  }
};

const updateCtrlT = async (data, callback) => {
  try {
    const CtrlT = await prisma.ctrlTechnique.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, CtrlT);
  } catch (err) {
    callback (err, null);
  }
};

const deleteCtrlT = async (id, callback) => {
  try {
    const CtrlT = await prisma.ctrlTechnique.delete ({
      where: {id},
    });
    callback (null, CtrlT);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createCtrlT,
  readCtrlT,
  readCtrlTById,
  updateCtrlT,
  deleteCtrlT,
  readCtrlTByDoc,
};

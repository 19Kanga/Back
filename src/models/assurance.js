const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createAssurance = async (data, callback) => {
  try {
    const Assurance = await prisma.assurance.create ({
      data: data,
    });
    callback (null, Assurance);
  } catch (err) {
    callback (err, null);
  }
};

const readAssurance = async callback => {
  try {
    const Assurances = await prisma.assurance.findMany ({
      select: {
        id: true,
        typeVeh: true,
        deductible: true,
        expDate: true,
        franchise: true,
        nameOfAssurance: true,
        primeMensuel: true,
        registrationOn: true,
        typeCouverture: true,
        Documentation: true,
      },
    });
    callback (null, Assurances);
  } catch (err) {
    callback (err, null);
  }
};

const readAssuranceById = async (id, callback) => {
  try {
    const Assurance = await prisma.assurance.findUnique ({
      where: {id},
      // include: {
      //   Documentation: {
      //     where: {docId: 'doc2'},
      //   },
      // },
    });
    callback (null, Assurance);
  } catch (err) {
    callback (err, null);
  }
};

const readAssuranceByDoc = async (id, callback) => {
  try {
    // const Assurance = await prisma.assurance.findMany ({
    //   where: {
    //     Documentation: {
    //       some: {
    //         id: id,
    //       },
    //     },
    //   },
    //   select: {
    //     expDate: true,
    //   },
    // });
    const Assurance = await prisma.documentation
      .findUnique ({where: {id}})
      .assurance ({select: {expDate: true}});
    callback (null, Assurance);
  } catch (err) {
    callback (err, null);
  }
};

const updateAssurance = async (data, callback) => {
  try {
    const Assurance = await prisma.assurance.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Assurance);
  } catch (err) {
    callback (err, null);
  }
};

const deleteAssurance = async (id, callback) => {
  try {
    const Assurance = await prisma.assurance.delete ({
      where: {id},
    });
    callback (null, Assurance);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createAssurance,
  readAssurance,
  readAssuranceById,
  updateAssurance,
  deleteAssurance,
  readAssuranceByDoc,
};

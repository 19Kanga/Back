const {PrismaClient} = require ('@prisma/client');
const {response} = require ('express');
const prisma = new PrismaClient ();
const {readCarteGById} = require ('./carteGrise');
const {readAssuranceById} = require ('./assurance');
const {readCtrlTById} = require ('./ctrlTechnique');

const createDocumentation = async (data, callback) => {
  try {
    const Documentation = await prisma.documentation.create ({
      data: data,
    });
    callback (null, Documentation);
  } catch (err) {
    callback (err, null);
  }
};

const readDocumentation = async callback => {
  try {
    const Documentations = await prisma.documentation.findMany ();
    callback (null, Documentations);
  } catch (err) {
    callback (err, null);
  }
};

const readDocumentationById = async (id, callback) => {
  try {
    const Documentation = await prisma.documentation.findUnique ({where: {id}});
    callback (null, Documentation);
  } catch (err) {
    callback (err, null);
  }
};

const updateDocumentation = async (data, callback) => {
  try {
    const Documentation = await prisma.documentation.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Documentation);
  } catch (err) {
    callback (err, null);
  }
};

const deleteDocumentation = async (id, callback) => {
  try {
    const Documentation = await prisma.documentation.delete ({
      where: {id},
    });
    callback (null, Documentation);
  } catch (err) {
    callback (err, null);
  }
};

const searchDoc = async (id, callback) => {
  try {
    // const Documentation = await prisma.documentation.findUnique ({where: {id}});
    readDocumentationById (id, (err, result) => {
      if (err) {
        console.log (err);
      } else {
        console.log (result);
        readAssuranceById (result.assuranceId, (er, res1) => {
          if (er) {
            console.log (er);
          }
          readCarteGById (result.docId, (er1, res2) => {
            if (er1) {
              console.log (er1);
            }
            readCtrlTById (result.ctrlTechId, (er2, res3) => {
              console.log ([res1, res2, res3]);
              callback (null, [res1, res2, res3]);
            });
          });
        });
        // res.json ({success: 1, result});
      }
    });
  } catch (err) {
    callback (err, null);
  }
};

const readDocumentationByDocu = async (id, callback) => {
  try {
    const ass = await prisma.assurance.findMany ({
      where: {
        Documentation: {
          some: {
            id: id,
          },
        },
      },
      select: {
        expDate: true,
      },
    });
    const ct = await prisma.ctrlTechnique.findMany ({
      where: {
        Documentation: {
          some: {
            id: id,
          },
        },
      },
      select: {
        prochaineVisite: true,
      },
    });

    callback (null, {assi: ass, cti: ct});
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createDocumentation,
  readDocumentation,
  readDocumentationById,
  updateDocumentation,
  deleteDocumentation,
  searchDoc,
  readDocumentationByDocu,
};

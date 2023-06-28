const express = require ('express');
const app = express ();
const cors = require ('cors');

const env = require ('./config/env');
const {PrismaContext} = require ('./config/prisma');

const userRouter = require ('./routes/users');
const authRouter = require ('./routes/auth');
const assuranceRouter = require ('./routes/assurance');
const carteGRouter = require ('./routes/carteGrise');
const ctrlTRouter = require ('./routes/ctrlTechnique');
const docRouter = require ('./routes/documentation');
const evenRouter = require ('./routes/evenement');
const permisRouter = require ('./routes/permis');
const typeVRouter = require ('./routes/typeVehicule');
const voitureRouter = require ('./routes/voiture');
const roleRouter = require ('./routes/role');
const controleVRouter = require ('./routes/controleV');
const searchRouter = require ('./routes/searchDoc');
const statVRouter = require ('./routes/statControleV');
const entrepriseRouter = require ('./routes/entreprises');
const employeeRouter = require ('./routes/employes');
const villesRouter = require ('./routes/villes');
const quartierRouter = require ('./routes/villes');

const startServer = async () => {
  const prisma = new PrismaContext ();
  await prisma.start ();

  app.use ('./uploads', express.static ('uploads'));
  app.use (express.json ());
  app.use (cors ());

  app.use ('/api/user', userRouter);
  app.use ('/api/auth', authRouter);
  app.use ('/api/voiture', voitureRouter);
  app.use ('/api/role', roleRouter);
  app.use ('/api/type-vehicule', typeVRouter);
  app.use ('/api/permis-de-conduire', permisRouter);
  app.use ('/api/Evenement', evenRouter);
  app.use ('/api/Documentation', docRouter);
  // Pas touche
  app.use ('/api/Controle-technique', ctrlTRouter);
  app.use ('/api/Carte-Grise', carteGRouter);
  app.use ('/api/Assurance', assuranceRouter);
  //fin pas touche
  app.use ('/api/ControleV', controleVRouter);
  app.use ('/api/Search', searchRouter);
  app.use ('/api/statControlV', statVRouter);
  //entreprise
  app.use ('/api/Entreprise', entrepriseRouter);
  app.use ('/api/Employes', employeeRouter);
  app.use ('/api/Villes', villesRouter);
  app.use ('/api/Quartier', quartierRouter);

  app.listen (env.port, () => {
    console.log (`projet cvt running on port: ${env.port}`);
  });
};
startServer ();

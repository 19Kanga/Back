const {
  createEntreprises,
  readEntreprisesById,
  updateEntreprises,
  deleteEntreprises,
  readEntreprises,
  readEntrepEmployeById,
} = require ('../models/entreprises');

const getEntreprisesByIdController = (req, res) => {
  const id = req.params.id;
  readEntreprisesById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Entreprises: result});
    }
  });
};

const getEntreprisesEmployeByIdController = (req, res) => {
  const id = req.params.id;
  readEntrepEmployeById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Entreprises: result});
    }
  });
};

const deleteEntreprisesController = (req, res) => {
  const id = req.params.id;
  deleteEntreprises (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getEntreprisessController = (req, res) => {
  readEntreprises ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Entreprises: result});
    }
  });
};

const postEntreprisesController = async (req, res) => {
  const body = req.body;
  createEntreprises (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({entr: result});
    }
  });
};

const patchEntreprisesController = (req, res) => {
  const data = req.body;
  updateEntreprises (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getEntreprisessController,
  getEntreprisesByIdController,
  postEntreprisesController,
  patchEntreprisesController,
  deleteEntreprisesController,
  getEntreprisesEmployeByIdController,
};

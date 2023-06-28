const {
  createAssurance,
  readAssuranceById,
  updateAssurance,
  deleteAssurance,
  readAssurance,
} = require ('../models/assurance');

const getAssuranceByIdController = (req, res) => {
  const id = req.params.id;
  readAssuranceById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Assurance: result});
    }
  });
};

const deleteAssuranceController = (req, res) => {
  const id = req.params.id;
  deleteAssurance (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getAssurancesController = (req, res) => {
  readAssurance ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Assurances: result});
    }
  });
};

const postAssuranceController = async (req, res) => {
  const body = req.body;
  createAssurance (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchAssuranceController = (req, res) => {
  const data = req.body;
  updateAssurance (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getAssurancesController,
  getAssuranceByIdController,
  postAssuranceController,
  patchAssuranceController,
  deleteAssuranceController,
};

const {
  createEmploye,
  readEmployeById,
  updateEmploye,
  deleteEmploye,
  readEmploye,
  readUserEmployeById,
} = require ('../models/employes');

const getEmployeByIdController = (req, res) => {
  const id = req.params.id;
  readEmployeById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Employe: result});
    }
  });
};

const getUserEmployeByIdController = (req, res) => {
  const id = req.params.id;
  readUserEmployeById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Employe: result});
    }
  });
};

const deleteEmployeController = (req, res) => {
  const id = req.params.id;
  deleteEmploye (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getEmployesController = (req, res) => {
  readEmploye ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Employes: result});
    }
  });
};

const postEmployeController = async (req, res) => {
  const body = req.body;
  createEmploye (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchEmployeController = (req, res) => {
  const data = req.body;
  updateEmploye (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getEmployesController,
  getEmployeByIdController,
  postEmployeController,
  patchEmployeController,
  deleteEmployeController,
  getUserEmployeByIdController,
};

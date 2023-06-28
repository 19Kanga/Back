const {
  createVille,
  readVilleById,
  updateVille,
  deleteVille,
  readVille,
} = require ('../models/villes');

const getVilleByIdController = (req, res) => {
  const id = req.params.id;
  readVilleById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Ville: result});
    }
  });
};

const deleteVilleController = (req, res) => {
  const id = req.params.id;
  deleteVille (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getVillesController = (req, res) => {
  readVille ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Villes: result});
    }
  });
};

const postVilleController = async (req, res) => {
  const body = req.body;
  createVille (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchVilleController = (req, res) => {
  const data = req.body;
  updateVille (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getVillesController,
  getVilleByIdController,
  postVilleController,
  patchVilleController,
  deleteVilleController,
};

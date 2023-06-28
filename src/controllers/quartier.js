const {
  createQuartier,
  readQuartierById,
  updateQuartier,
  deleteQuartier,
  readQuartier,
} = require ('../models/quartier');

const getQuartierByIdController = (req, res) => {
  const id = req.params.id;
  readQuartierById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Quartier: result});
    }
  });
};

const deleteQuartierController = (req, res) => {
  const id = req.params.id;
  deleteQuartier (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getQuartiersController = (req, res) => {
  readQuartier ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Quartiers: result});
    }
  });
};

const postQuartierController = async (req, res) => {
  const body = req.body;
  createQuartier (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchQuartierController = (req, res) => {
  const data = req.body;
  updateQuartier (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getQuartiersController,
  getQuartierByIdController,
  postQuartierController,
  patchQuartierController,
  deleteQuartierController,
};

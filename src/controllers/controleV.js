const {
  readControleVById,
  readControleV,
  createControleV,
  selectLabel,
  selectDataByDate,
  selectCtrl,
  selectAssu,
  verifControle,
} = require ('../models/controleV');

const postControleV = async (req, res) => {
  const body = req.body;
  createControleV (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1});
    }
  });
};

const getControleVByIdController = (req, res) => {
  const id = req.params.id;
  readControleVById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, ControleV: result});
    }
  });
};

const getControleVsController = (req, res) => {
  readControleV ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, ControleVs: result});
    }
  });
};

const getSelectLabelController = (req, res) => {
  const id = req.params.id;
  selectLabel (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, labels: result});
    }
  });
};
const getDataByDateController = (req, res) => {
  const id = req.params.id;
  selectAssu (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, info: result});
    }
  });
};
const getCtrlController = (req, res) => {
  const id = req.params.id;
  selectCtrl (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, info: result});
    }
  });
};

const verifierControle = (req, res) => {
  const id = req.params.id;
  const userId = req.params.userId;
  // const date = req.params.date;
  // const user = req.params.data;
  verifControle (id, userId, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({suc: result});
    }
  });
};

module.exports = {
  postControleV,
  getControleVsController,
  getControleVByIdController,
  getSelectLabelController,
  getDataByDateController,
  getCtrlController,
  verifierControle,
};

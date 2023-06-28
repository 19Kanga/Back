const {
  readControleVByDate,
  readAllVByDate,
  getAllControleA,
} = require ('../models/controleV');

BigInt.prototype.toJSON = function () {
  return this.toString ();
};

// console.log(JSON.stringify({a:1n}))

const getControleVByDateController = (req, res) => {
  // const id = req.params.id;
  const userId = req.params.userId;
  // const user = req.params.data;
  readControleVByDate (userId, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, ControleV: result});
    }
  });
};

const getControleVDateController = (req, res) => {
  const userI = req.params.userI;
  readAllVByDate (userI, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, ControleV: result});
    }
  });
};

const getAllControlerAControleur = (req, res) => {
  getAllControleA ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      // console.log (result);
      res.json ({success: 1, ControleV: result});
    }
  });
};

module.exports = {
  // getControleVByIdController,
  getControleVByDateController,
  getControleVDateController,
  getAllControlerAControleur,
};

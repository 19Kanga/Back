const {readPermisById} = require ('../models/Permis');

const getPermisByIdController = (req, res) => {
  const id = req.params.id;
  readPermisById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Permis: result});
    }
  });
};

module.exports = {
  getPermisByIdController,
};

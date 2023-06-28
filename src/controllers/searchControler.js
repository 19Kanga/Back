// const {

const {readAssuranceByDoc} = require ('../models/assurance');
const {readCtrlTByDoc} = require ('../models/ctrlTechnique');

// } = require ('../models/Permis');

const getCtrlByDocIdController = (req, res) => {
  const id = req.params.id;
  readCtrlTByDoc (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, ctrlDoc: result});
    }
  });
};

const getAssuranceByDocIdController = (req, res) => {
  const id = req.params.id;
  readAssuranceByDoc (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, assDoc: result});
    }
  });
};

module.exports = {
  getCtrlByDocIdController,
  getAssuranceByDocIdController,
};

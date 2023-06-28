const {
  createDocumentation,
  readDocumentationById,
  updateDocumentation,
  deleteDocumentation,
  readDocumentation,
  searchDoc,
  readDocumentationByDocu,
} = require ('../models/documentation');
// const { get } = require('../routes/users');

const getDocumentationByIdController = (req, res) => {
  const id = req.params.id;
  readDocumentationById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Documentation: result});
      return console.log (result);
    }
  });
};

const deleteDocumentationController = (req, res) => {
  const id = req.params.id;
  deleteDocumentation (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getDocumentationsController = (req, res) => {
  readDocumentation ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Documentations: result});
    }
  });
};

const postDocumentationController = async (req, res) => {
  const body = req.body;
  createDocumentation (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchDocumentationController = (req, res) => {
  const data = req.body;
  updateDocumentation (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const searchDocumentControlleur = async (req, res) => {
  const id = req.params.id;
  searchDoc (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, result});
    }
  });
};

const getDocumentationByDocuController = async (req, res) => {
  const id = req.params.id;
  readDocumentationByDocu (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getDocumentationsController,
  getDocumentationByIdController,
  postDocumentationController,
  patchDocumentationController,
  deleteDocumentationController,
  searchDocumentControlleur,
  getDocumentationByDocuController,
};

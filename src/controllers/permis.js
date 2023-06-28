const {
  createPermis,
  readPermisById,
  readPermisByNumPermis,
  updatePermis,
  deletePermis,
  readPermis,
  readPermisByUserId,
  AllControleP,
} = require ('../models/permis');

const getPermisByIdController = (req, res) => {
  const id = req.params.id;
  readPermisByNumPermis (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Permis: result});
    }
  });
};

const deletePermisController = (req, res) => {
  const id = req.params.id;
  deletePermis (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getPermissController = (req, res) => {
  readPermis ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Permis: result});
    }
  });
};

const postPermisController = async (req, res) => {
  const body = req.body;
  createPermis (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({permis: result});
    }
  });
};

const getControlePermisController = async (req, res) => {
  const permisId = req.params.permisId;
  const userId = req.params.userId;
  AllControleP (permisId, userId, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      // console.log (result);
      res.json ({permis: result});
    }
  });
};

const patchPermisController = (req, res) => {
  const data = req.body;
  const id = req.body.id;
  updatePermis (data, id, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, update: result});
    }
  });
};

const getPermisByUserIdController = (req, res) => {
  const id = req.params.id;
  readPermisByUserId (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      // console.log (result);
      res.json ({success: 1, permis: result});
    }
  });
};

module.exports = {
  getPermissController,
  getPermisByIdController,
  postPermisController,
  patchPermisController,
  deletePermisController,
  getPermisByUserIdController,
  getControlePermisController,
};

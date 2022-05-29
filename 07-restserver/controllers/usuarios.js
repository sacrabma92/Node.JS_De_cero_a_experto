const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { q, nombre, apikey } = req.query;

  res.json({
    msg: "get API - Controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;

  res.json({
    msg: "put API",
    id,
  });
};

const usuarioPost = (req, res) => {
  const body = req.body;

  res.json({
    msg: "post API",
    body,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API",
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msg: "Patch API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuarioPost,
  usuariosDelete,
  usuariosPatch,
};

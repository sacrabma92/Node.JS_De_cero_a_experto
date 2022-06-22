const { response } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

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

const usuarioPost = async (req, res = response) => {

  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Verificar si el correo existe
  const existeEmail = await Usuario.findOne({correo});
  if( existeEmail ){
    return res.status(400).json({
      msg: 'El correo ya esta registrado'
    })
  }

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar en BD
  await usuario.save();

  res.json({
    usuario
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

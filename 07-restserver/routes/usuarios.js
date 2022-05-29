const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuarioPost,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.post("/", usuarioPost);

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;

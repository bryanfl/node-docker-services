const express = require("express");
const UsuarioController = require("./controller");
const router = express.Router();

const usuario = new UsuarioController();

router.post("/login", usuario.login);

module.exports = router;

const express = require("express");
const AutosController = require("./controller");
const router = express.Router();
const auth = require("../../middleware/auth");

const autos = new AutosController();

router.get("/", auth, autos.getAutos);

module.exports = router;

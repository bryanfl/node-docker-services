const express = require("express");
const AutosController = require("./controller");
const router = express.Router();

const autos = new AutosController();

router.get("/", autos.getAutos);

module.exports = router;

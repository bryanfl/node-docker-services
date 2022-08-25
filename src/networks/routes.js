const autos = require("../autos/networks");

const routes = (server) => {
  server.use("/api/autos", autos);
};

module.exports = routes;

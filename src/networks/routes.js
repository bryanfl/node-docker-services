const autos = require("../componentes/autos/networks");
const usuario = require("../componentes/usuario/network");

class Routes {
  app;

  constructor(app) {
    this.app = app;
  }

  services() {
    this.app.use("/api/autos", autos);
    this.app.use("/api/usuario", usuario);
  }

  views() {
      this.app.get('/chat', (req, res) => {
          return res.sendFile(path.resolve('public/index.html'));
      });
  }
}

module.exports = Routes;
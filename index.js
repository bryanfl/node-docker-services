const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const Routes = require('./src/networks/routes');

const pathEnv = process.env.NODE_ENV == "production" ? '/.env.production' : '/.env.development';
require("dotenv").config({path: __dirname + pathEnv});

class Server {
  constructor(app) {
    this.app = app;
    this.port = process.env.PORT || 3000;
    this.routes = new Routes(this.app);
  }

  config() {
    this.app.use(bodyParser.json());

    this.app.engine('html', require('ejs').renderFile);
    this.app.set('view engine', 'html');

    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use(cors());
    this.app.use(express.static(__dirname + '/public'));
  }

  route() {
    this.routes.services();
    this.routes.views();
  }

  midlawares() {
    app.use(morgan("dev"));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
  }

  init() {
    this.app.listen(this.port, () => {
      console.log(`Connected server to port ${this.port}`);
    });
  }
}

const server = new Server(app);
server.config();
server.route();
server.midlawares();
server.init();

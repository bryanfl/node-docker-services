const jwt = require("jsonwebtoken");
const Response = require('../../utils/response');
const pathEnv = process.env.NODE_ENV == "production" ? '/.env.production' : '/.env.development';
require("dotenv").config({path: __dirname + pathEnv });

class UsuarioController {
    #store;

    constructor() {
        this.login = this.login.bind(this);
        this.#store = null;
    }

    async login(req, res) {
        // await consulta al store
        const datosUsuario = {
            id: 1,
            email: 'email@email.com'
        }

        const token = jwt.sign(
            datosUsuario,
            process.env.TOKEN_KEY,
            {
            }
        );

        return res.status(200).json(new Response(true, {
            ...datosUsuario,
            token
        }));
    }
}

module.exports = UsuarioController;
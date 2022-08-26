const pathEnv = process.env.NODE_ENV == "production" ? '/.env.production' : '/.env.development';
require("dotenv").config({path: __dirname + pathEnv });

const Response = require('../utils/response')
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const response = new Response();

    const token = req.headers["authorization"];

    if (!token) {
        response.content = "A token is required for authentication";
        return res.status(403).send(response);
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        response.content = "Invalid Token";
        return res.status(401).send(response);
    }
    return next();
};

module.exports = verifyToken;
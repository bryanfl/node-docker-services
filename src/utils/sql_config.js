const pathEnv = process.env.NODE_ENV == "production" ? '/.env.production' : '/.env.development';
require("dotenv").config({path: __dirname + pathEnv });

const generateSqlConfig = (DB) => {
  return {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: DB,
    port: Number(process.env.DB_PORT),
    server: process.env.DB_HOST,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false, // change to true for local dev / self-signed certs
    },
  };
};

module.exports = generateSqlConfig;

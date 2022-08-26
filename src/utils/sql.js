const generateSqlConfig = require("./sql_config");
const sql = require("mssql");

class SqlConnection {
  constructor() {}

  async #connect(key) {
    try {
      const nomDB = this.#getNameDatabase(key);
      await sql.connect(generateSqlConfig(nomDB)); //
      // console.log("Conectado correctamente a la base de datos");
    } catch (err) {
      console.log("Ocurrio un error: ", err.message);
    }
  }

  async executeProcedure(procedure, parameters, parameters_2, key) {
    await this.#connect(key);

    return new Promise((resolve, reject) => {
      const request = new sql.Request();
      request.input("paremtro_1", sql.VarChar(), parameters);
      request.input("paremtro_2", sql.Int, parameters_2);
      request.execute(procedure, (err, result) => {
        if (err) {
          sql.close();
          reject(err.message);
        }
        // console.log(result.recordsets.length); // count of recordsets returned by the procedure
        // console.log(result.recordsets[0].length); // count of rows contained in first recordset
        // console.log(result.recordset); // first recordset from result.recordsets
        // console.log(result.returnValue); // procedure return value
        // console.log(result.output); // key/value collection of output values
        // console.log(result.rowsAffected); // array of numbers, each number represents the number of rows affected by executed statemens
        sql.close();
        resolve(result);
      });
    });
  }
  #getNameDatabase(key) {
    const databases = {
      key: 'value'
    };

    return databases[key];
  }
}

module.exports = SqlConnection;

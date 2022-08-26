const generateSqlConfig = require("./sql_config");
const sql = require("mssql");

class SqlConnection {
  constructor() {}

  async #connect(codEmpresa) {
    try {
      const nomDB = this.#getNameDatabase(codEmpresa);
      await sql.connect(generateSqlConfig(nomDB)); //
      // console.log("Conectado correctamente a la base de datos");
    } catch (err) {
      console.log("Ocurrio un error: ", err.message);
    }
  }

  async executeProcedure(procedure, parameters, index, codEmpresa) {
    await this.#connect(codEmpresa);

    return new Promise((resolve, reject) => {
      const request = new sql.Request();
      request.input("Parametros", sql.VarChar(), parameters);
      request.input("Indice", sql.Int, index);
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
  #getNameDatabase(codEmpresa) {
    const databases = {
      key: 'value'
    };

    return databases[codEmpresa];
  }
}

module.exports = SqlConnection;

const SqlConnection = require("../utils/sql");

class AutosStore {
  #sql;

  constructor() {
    this.#sql = new SqlConnection();
  }

  async getAutosDB() {
    // const autos = await this.#sql
    //   .executeProcedure("ProcBusquedaUnidad ", "", 2)
    //   .catch((err) => {
    //     throw new Error(err);
    //   });

    const autos = [
      {
        id: 1,
        placa: 'AXZ-123'
      }
    ]

    return autos;
  }
}

module.exports = AutosStore;

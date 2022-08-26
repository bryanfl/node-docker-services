const Response = require('../../utils/response');
const AutosStore = require("./store");

class AutosController {
  #store;

  constructor() {
    this.getAutos = this.getAutos.bind(this);
    this.#store = new AutosStore();
  }

  async getAutos(req, res) {
    const autos = await this.#store.getAutosDB().catch((error) => res.status(500).json(new Response(false, null, [ error.message ])));

    return res.status(200).json(new Response(true, autos, null));
  }
}

module.exports = AutosController;

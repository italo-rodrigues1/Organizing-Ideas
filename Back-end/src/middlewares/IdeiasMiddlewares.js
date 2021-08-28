const { validate: isUuid } = require("uuid");
const Ideias = require("../models/Ideias");

module.exports = {
  async getIdeias(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const ideia = await Ideias.findById(id);
      res.ideia = ideia;
      if (!ideia) {
        return res.status(404).json({ error: "Ideias not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    next();
  },
};
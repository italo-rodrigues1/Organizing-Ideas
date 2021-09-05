const { v4: uuid } = require("uuid");
const User = require('../models/User');


module.exports = {
  async allUser(req, res) {
    try {
      const user = await User.find();
      return res.status(200).json({ user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createUser(req, res) {
    const { title, link ,goal ,info } = req.body;

    if (!title || !link || !goal || !info) {
      return res.status(400).json({ error: "Missing title or link." });
    }

    const ideia = new Ideias({
      _id: uuid(),
      title,
      goal,
      info,
      link,   
      emphasis: false,
    });

    try {
      await ideia.save();

      return res.status(201).json({ message: "Ideia added succesfully!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    const { title, link ,goal ,info } = req.body;

    if (!title && !link && !goal && !info) {

      return res.status(400).json({ error: "You must inform a new title,link,goal or a new info" });
    }

    if(title) res.ideia.title = title;
    if(link) res.ideia.link = link;
    if(goal) res.ideia.goal = goal;
    if(info) res.ideia.info = info;

    try {
      await res.ideia.save();
      return res.status(200).json({ message: "Ideia updated succesfully!" });
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },

  async delete(req, res) {
    try {
      await res.ideia.remove();
      return res.status(200).json({ message: "Ideias removed succesfully!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async updateUser(req, res) {
    res.ideia.emphasis = !res.ideia.emphasis;

    try {
      await res.ideia.save()
      
      return res.status(200).json({
        message: `Ideias ${
          res.ideia.emphasis ? "emphasis" : "do not highlight"
        } sucessfully!`,
      });
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
    
  },
};
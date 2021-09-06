const { v4: uuid } = require("uuid");
const User = require('../models/User');
const UserGoogle = require('../models/UserGoogle');


module.exports = {
  async allUser(req, res) {
    try {
      const user = await User.find();
      const userGoogle = await UserGoogle.find();

      return res.status(200).json({ user, userGoogle });
     
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createUser(req, res) {
    const { googleId,name,email } = req.body;

    if (!googleId || !name || !email) {
      return res.status(400).json({ error: "Missing googleID,name or email." });
    }

  
    const userGoogle = new UserGoogle({
      _id: uuid(),
      googleId,
      name,
      email,
    }) 
    
    // const user = new User({
    //   _id: uuid(),
    //   googleId,
    //   name,
    //   email,
    // }) 


    try {
      await userGoogle.save();
      // await user.save();

      return res.status(201).json({ message: "User added succesfully!" });
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
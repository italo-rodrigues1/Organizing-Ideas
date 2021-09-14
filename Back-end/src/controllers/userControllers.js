const { v4: uuid } = require("uuid");
const User = require('../models/User');
const UserGoogle = require('../models/UserGoogle');
const jwt = require('jsonwebtoken');

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
    const { name,password,email } = req.body;

    if ( !name || !password || !email) {
      return res.status(400).json({ error: "Missing googleID,name or email." });
    }

    const user= new User({
      _id: uuid(),
      name,
      password,
      email,
    }) 

    try {
      await user.save();
      
      return res.status(201).json({ message: "User added succesfully!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async createUserGoogle(req, res) {
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
    
    
    try {
      await userGoogle.save();

      return res.status(201).json({ message: "User added succesfully!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }

  },

  async userAuthenticate(req, res) {
    const { email,password } = req.body;
    
    if(email || password){
      // return res.json({password,email,token:jwt.sign(password,email, 'PRIVATEKEY')});

      var token = jwt.sign({email,password},'PRIVATEKEY');
    }
  
    try {
      return res.status(200).send({ auth: true,token: token});

    } catch (err) {
      return res.status(500).json({ error: err.message });
    }


    // const { email,password } = req.body;
    
    //   const authenticateUser = new AuthenticateUserService();
  
    //   const {user,token} = await authenticateUser.execute({email,password});

    //   return res.json({user,token});
    
  },

  async logout(req, res) {

    res.status(200).send({ auth: false, token: null });

    // try {
    //   return res.status(200).json({ message: "Token removed succesfully!" });
    // } catch (err) {
    //   return res.status(500).json({ error: err.message });
    // }
  },

  async delete(req, res) {
    try {
      await res.user.remove();
      return res.status(200).json({ message: "User removed succesfully!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // async update(req, res) {
  //   const { name,password,email } = req.body;

  //   const validar = await Yup.object().shape({
  //     name: Yup.string().strict(true).required(),
  //     password: Yup.string().strict(true).required().min(8, "Password must be at least 8 characters"),
  //     email: Yup.string().required().email(),
  //   })

  //   if (!(await validar.isValid(req.body))) {
  //     return res.status(400).json({
  //         message: 'Falha ao alterar, verifique os dados informados e tente novamente!'
  //     })
  //   }
  // },


  // async updateUser(req, res) {
  //   res.ideia.emphasis = !res.ideia.emphasis;

  //   try {
  //     await res.ideia.save()
      
  //     return res.status(200).json({
  //       message: `Ideias ${
  //         res.ideia.emphasis ? "emphasis" : "do not highlight"
  //       } sucessfully!`,
  //     });
  //   } catch (err) {
  //     res.status(400).json({ error: err.message })
  //   }
    
  // },
};
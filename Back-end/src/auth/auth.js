const jwt = require('jsonwebtoken');
// const { promisify } = require('util');

// async function validate(req, res, next) {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.sendStatus(401);
//   }

//   const [, token] = authorization.split(' ');

//   try {
//     await promisify(jwt.verify)(token, 'PRIVATEKEY');

//     return next();
//   } catch (err) {
//     return res.sendStatus(401);
//   }
// }

// module.exports = validate;


async function validate(req, res, next) {
   
    try{

        const { email, password } = req.body;

        const authenticateUser = new AunthenticateUserService();
        
        const { user, token } = await authenticateUser.execute({
            email,
            password,
        });
        

        return res,json({ user, token });
    }catch(err){
        return res.status(400).json({ error: err.message });
    }


}
  
  module.exports = validate;
const Router = require('express'); 
const ideiasController = require('../controllers/IdeiasControllers') ;
const ideiasMiddleware = require('../middlewares/IdeiasMiddlewares') ;
const userController = require('../controllers/userControllers');
const validateToken = require('../auth/auth');

const routes = Router(); 

routes.get('/', (req, res) => {
    res.send('API Ideias!')
})

routes.get('/ideias', ideiasController.allIdeias,validateToken);
routes.post('/ideias', ideiasController.createIdeias);
routes.put('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.update);
routes.patch('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.updateEmphasis);
routes.delete('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.delete);

routes.get('/login', userController.allUser);
routes.get('/login/google', userController.createUserGoogle);


routes.post('/login',userController.userAuthenticate,validateToken);
routes.get('/login/logout',userController.logout);
 
// routes.put('/login/:id', userController.update);
routes.delete('/login/:id', userController.delete);


routes.post('/cadastro',userController.createUser);

module.exports = routes;
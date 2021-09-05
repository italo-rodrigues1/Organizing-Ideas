const Router = require('express'); 
const ideiasController = require('../controllers/IdeiasControllers') ;
const ideiasMiddleware = require('../middlewares/IdeiasMiddlewares') ;
const userController = require('../controllers/userControllers');

const routes = Router(); 

routes.get('/', (req, res) => {
    res.send('API Teste Mercos!')
})

routes.get('/ideias', ideiasController.allIdeias);
routes.post('/ideias', ideiasController.createIdeias);
routes.put('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.update);
routes.patch('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.updateEmphasis);
routes.delete('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.delete);

routes.get('/login', userController.allUser);
routes.post('/login', userController.createUser);
routes.put('/login', userController.update);
routes.delete('/login', userController.delete);

module.exports = routes;
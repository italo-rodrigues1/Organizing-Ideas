const Router = require('express'); 
const ideiasController = require('../controllers/IdeiasControllers') ;
const ideiasMiddleware = require('../middlewares/IdeiasMiddlewares') ;

const routes = Router(); 

routes.get('/', (req, res) => {
    res.send('API Teste Mercos!')
})

routes.get('/ideias', ideiasController.allIdeias);
routes.post('/ideias', ideiasController.createIdeias);
routes.put('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.update);
routes.patch('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.updateEmphasis);
routes.delete('/ideias/:id', ideiasMiddleware.getIdeias, ideiasController.delete);


module.exports = routes;
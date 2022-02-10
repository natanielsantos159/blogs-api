require('dotenv').config();
const express = require('express');

const app = express();

const userController = require('./controllers/userController.js');
const categoryController = require('./controllers/categoryController.js');

const validateUserInfo = require('./middlewares/validateUserInfo');
const validateLoginFields = require('./middlewares/validateLoginFields');
const validateJWT = require('./middlewares/validateJWT');

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateUserInfo, userController.create);

app.post('/login', validateLoginFields, userController.login);

app.get('/user', validateJWT, userController.getAll);

app.get('/user/:id', validateJWT, userController.getById);

app.post('/categories', validateJWT, categoryController.create);

app.get('/categories', validateJWT, categoryController.getAll);

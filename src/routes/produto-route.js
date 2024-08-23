const express = require('express')
const route = express.Router()
const controller = require('../controllers/produto-controller') 

//Fazer roteamento de produtos
route.get('/', controller.get)

module.exports = route
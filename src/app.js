const express = require('express')
const app = express()
//express.json: Configurar para preencher json nos request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mydatabase')

//Registrar a model
require('./models/produto')


//Falta incluir a rota
const index = require('.//routes/index')
app.use('/', index)

//Criar rota p/ produto
const produtoRouter = require('./routes/produto-route')
app.use('/produtos', produtoRouter)

module.exports = app;
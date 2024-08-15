const express = require('express')
const app = express()
//express.json: Configurar para preencher json nos request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Falta incluir a rota
const index = require('.//routes/index')
app.use('/', index)

module.exports = app;
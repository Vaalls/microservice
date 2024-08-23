//Classe para ir na base de dados

const mongoose = require('mongoose')
const Produto = mongoose.model('Produto')

exports.get = async() => {
    const result = await Produto.find({})
    return result
}
 
exports.create = async(data) => {
    const produto = Produto(data)
    await produto.save()
}
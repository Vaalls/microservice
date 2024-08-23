const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const scheme = new Schema({
    titulo:{
        type: String, 
        required: true,
        trim: true 
    },
    
    price:{
        type: Number,
        required: true
    }

})
module.exports = mongoose.model('Produto', scheme)
const express = require('express')
const router = new express.Router()

//Ponto de acesso de get
//Retornar status 200 || OK
router.get('/', (req, res, next)=>{
    res.status(200).send(
        {
            "Nome": "Gabriel Valls"
        }
    )
})

//401 Unauthorized
router.get('/privada', (req, res) =>{
    const token = req.headers['authorization'];

    if(!token || token !== 'minhaSenha'){
        return res.status(401).send('Sem Autorização')
    }

    res.send('Área acessada com sucesso').status(200)
})

module.exports = router;
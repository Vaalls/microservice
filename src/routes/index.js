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

module.exports = router;
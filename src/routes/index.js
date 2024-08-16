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

//Perfis de exemplo
const tokenExemplo = {
    'tokenAdmin' : {role: 'admin'},
    'tokenUser' : {role: 'user'},
    'tokenConvidado' : {role: 'convidado'}
}

//403 Sem permissões 
router.get('/admin', (req, res) => {
    const token = req.headers["authorization"];

    if(!token){
        return res.status(401).send('Sem Autorização')
    }

    const user = tokenExemplo[token]
    if(!user){
        return res.status(401).send('Token inválido')
    }

    if(user.role != 'admin'){
        return res.status(403).send('Você não tem permissão para acessar aqui')
    }

    return res.send('Acesso liberado!').status(200)
})

//400 Bad Request
router.post('/submit', (req, res) => {
    const {nome, email} = req.body;

    if(!nome || !email){
        return res.status(400).send('Bad Request... \nFavor enviar nome e email')
    }

    //Status 201 created
    res.status(201).send('Dado criado com sucesso');
})

module.exports = router;
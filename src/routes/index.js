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


//simulando base de dados
let items = [
    {id: 1, nome: 'Gabriel'},
    {id: 2, nome: "Kaio"},
    {id: 3, nome: "Gustavo"}
]

//404 Not Found
router.get('/items/:id', (req, res) =>{
    const id = parseInt(req.params.id)

    const item = items.find((item) => item.id == id)

    if(item){
        return res.status(200).send(`Esse é seu item: ${item.nome}`);
    } else{
        return res.status(404).send('Item não encontrado!')
    }
})

//Status 429 rate limiting -- Multa por tentar acesso


module.exports = router;
const express = require('express')
const routerCandidato = express.Router()
const controller = require('../controllers/candidato.controller')
const bodyParser = require('body-parser')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routerCandidato.post('/candidato',function(res,req){
    controller.insertar()
})

routerCandidato.get('/candidato', function(req, res){
    controller.ver()
   
})

routerCandidato.post('/autenticacion', function(res, req){

    const {usuario, contraseña} = req.body
    
    

    var verificar = controller.autenticacion(usuario, contraseña)

    if (verificar === false){
        return res.sendStatus(401).send (' datos no coinciden')
    }

    res.send(usuario,contraseña)
    console.log(res)
    console.log(req)

   
})

//routerCandidato.patch('/editarUsuario', editar)

routerCandidato.delete('/candidato', function(res, req){
    controller.borrar()

})

module.exports = routerCandidato
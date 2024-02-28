const express = require('express')
const routerEducacion = express.Router()
const controller = require('../controllers/tituloEducacion.controller')


routerEducacion.post('/insertartituloEducacion',function(res,req,next){
    controller.insertar()
    next
})

routerEducacion.get('/tituloEducacion', function(req, res, next){
    controller.ver()
    next
})

//routerEducacion.patch('/editartituloEducacion', editar)

routerEducacion.delete('/eliminartituloEducacion', function(res, req, next){
    controller.borrar()
    next

})

module.exports = routerEducacion
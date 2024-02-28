const express = require('express')
const routerOferta = express.Router()
const controller = require('../controllers/oferta.controller')


routerOferta.post('/insertarOferta',function(res,req,next){
    controller.insertar()
    next
})

routerOferta.get('/Oferta', function(req, res, next){
    controller.ver()
    next
})

//routerOferta.patch('/editarOferta', editar)

routerOferta.delete('/eliminarOferta', function(res, req, next){
    controller.borrar()
    next

})

module.exports = routerOferta
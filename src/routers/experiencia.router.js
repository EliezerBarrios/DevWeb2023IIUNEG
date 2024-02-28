const express = require('express')
const routerExteriencia = express.Router()
const controller = require('../controllers/experiencia.controller')


routerExteriencia.post('/insertarExperiencia',function(res,req,next){
    controller.insertar()
    next
})

routerExteriencia.get('/experiencia', function(req, res, next){
    controller.ver()
    next
})

//routerExteriencia.patch('/editarExperiencia', editar)

routerExteriencia.delete('/eliminarExperiencia', function(res, req, next){
    controller.borrar()
    next

})

module.exports = routerExteriencia
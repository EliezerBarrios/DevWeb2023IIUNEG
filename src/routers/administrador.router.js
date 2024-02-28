const express = require('express')
const routerAdministrador = express.Router()
const controller = require('../controllers/administrador.controller')


routerAdministrador.post('/insertaradmin',function(res,req,next){
    controller.insertar()
    next
})

routerAdministrador.get('/admin', function(req, res, next){
    controller.ver()
    next
})

//routerAdministrador.patch('/editarAdmin', editar)

routerAdministrador.delete('/eliminarAdmin', function(res, req, next){
    controller.borrar()
    next

})

module.exports = routerAdministrador
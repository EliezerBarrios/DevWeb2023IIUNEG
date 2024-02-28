const express = require('express')
const routerEmpresa = express.Router()
const controller = require('../controllers/empresa.controller')


routerEmpresa.post('/insertarempresa',function(res,req,next){
    controller.insertar()
    next
})

routerEmpresa.get('/empresa', function(req, res, next){
    controller.ver()
    next
})

//routerEmpresa.patch('/editarEmpresa', editar)

routerEmpresa.delete('/eliminarEmpresa', function(res, req, next){
    controller.borrar()
    next

})

module.exports = routerEmpresa
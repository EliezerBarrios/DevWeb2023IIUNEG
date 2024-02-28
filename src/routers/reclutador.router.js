const express = require('express')
const routerReclutador = express.Router()
const controller = require('../controllers/reclutador.controller')


routerReclutador.post('/insertareclutador',function(res,req,next){
    controller.insertar()
    next
})

routerReclutador.get('/reclutador', function(req, res, next){
    controller.ver()
    next
})

//routerReclutador.patch('/editarReclutador', editar)

routerReclutador.delete('/eliminarReclutador', function(res, req, next){
    controller.borrar()
    next

})

module.exports = routerReclutador
const express = require('express')
const router = express.Router()
const controller = require('../controllers/reclutador.controller')


router.post('/insertareclutador',function(res,req,next){
    controller.insertar()
    next
})

router.get('/reclutador', function(req, res, next){
    controller.ver()
    next
})

//router.post('/editarReclutador', editar)

router.post('/eliminarReclutador', function(res, req, next){
    controller.borrar()
    next

})

module.exports = router
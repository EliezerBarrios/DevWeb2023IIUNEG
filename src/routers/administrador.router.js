const express = require('express')
const router = express.Router()
const controller = require('../controllers/administrador.controller')


router.post('/insertaradmin',function(res,req,next){
    controller.insertar()
    next
})

router.get('/admin', function(req, res, next){
    controller.ver()
    next
})

//router.post('/editarAdmin', editar)

router.post('/eliminarAdmin', function(res, req, next){
    controller.borrar()
    next

})

module.exports = router
const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')


router.post('/insertarUsuario',function(res,req,next){
    controller.insertar()
    next
})

router.get('/usuario', function(req, res, next){
    controller.ver()
    next
})

//router.post('/editarUsuario', editar)

router.post('/eliminarUsuario', function(res, req, next){
    controller.borrar()
    next

})

module.exports = router



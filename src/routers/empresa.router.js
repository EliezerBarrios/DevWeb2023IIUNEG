const express = require('express')
const router = express.Router()
const controller = require('../controllers/empresa.controller')


router.post('/insertarempresa',function(res,req,next){
    controller.insertar()
    next
})

router.get('/empresa', function(req, res, next){
    controller.ver()
    next
})

//router.post('/editarEmpresa', editar)

router.post('/eliminarEmpresa', function(res, req, next){
    controller.borrar()
    next

})

module.exports = router
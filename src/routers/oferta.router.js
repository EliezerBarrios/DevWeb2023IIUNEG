const express = require('express')
const router = express.Router()
const controller = require('../controllers/oferta.controller')


router.post('/insertarOferta',function(res,req,next){
    controller.insertar()
    next
})

router.get('/Oferta', function(req, res, next){
    controller.ver()
    next
})

//router.post('/editarOferta', editar)

router.post('/eliminarOferta', function(res, req, next){
    controller.borrar()
    next

})

module.exports = router
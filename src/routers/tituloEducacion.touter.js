const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloEducacion.controller')


router.post('/insertartituloEducacion',function(res,req,next){
    controller.insertar()
    next
})

router.get('/tituloEducacion', function(req, res, next){
    controller.ver()
    next
})

//router.post('/editartituloEducacion', editar)

router.post('/eliminartituloEducacion', function(res, req, next){
    controller.borrar()
    next

})

module.exports = router
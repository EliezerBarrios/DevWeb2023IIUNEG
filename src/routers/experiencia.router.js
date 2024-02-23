const express = require('express')
const router = express.Router()
const controller = require('../controllers/experiencia.controller')


router.post('/insertarExperiencia',function(res,req,next){
    controller.insertar()
    next
})

router.get('/experiencia', function(req, res, next){
    controller.ver()
    next
})

//router.post('/editarExperiencia', editar)

router.post('/eliminarExperiencia', function(res, req, next){
    controller.borrar()
    next

})

module.exports = router
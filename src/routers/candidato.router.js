const express = require('express')
const router = express.Router()
const controller = require('../controllers/candidato.controller')


router.post('/insertarcandidato',function(res,req,next){
    controller.insertar()
    next
})

router.get('/candidato', function(req, res, next){
    controller.ver()
    next
})

//router.post('/editarUsuario', editar)

router.post('/eliminarCandidato', function(res, req, next){
    controller.borrar()
    next

})

module.exports = router
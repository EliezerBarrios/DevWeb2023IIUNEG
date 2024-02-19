const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')


router.get('/usuario', ver )

router.post('/insertarUsuario',insertar)

router.post('/editarUsuario', editar)

router.post('/eliminarUsuario', eliminar)






/*const { getUser } = require ('../controllers/index.js');

router.get('/users', getUser);*/


module.exports = router



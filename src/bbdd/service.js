const express = require('express')
const routes = require('../routers/index.router.js')
const routerAdministrador = require('../routers/administrador.router.js')
const routerCandidato = require('../routers/candidato.router.js')
const routerEmpresa = require('../routers/empresa.router.js')
const routerExteriencia = require('../routers/experiencia.router.js')
const routerOferta = require('../routers/oferta.router.js')
const routerReclutador = require('../routers/reclutador.router.js')
const routerEducacion = require('../routers/tituloEducacion.router.js')


const app = express()



//middleware
app.use(express.json());
//app.use(express.urlencoded({extended: false}));


//routers
app.use(routes)
app.use(routerAdministrador)
app.use(routerCandidato)
app.use(routerEmpresa)
app.use(routerExteriencia)
app.use(routerOferta)
app.use(routerReclutador)
app.use(routerEducacion)


app.listen(3001, ()=>{
    console.log('servidor escuchando en el puerto 3001')
})





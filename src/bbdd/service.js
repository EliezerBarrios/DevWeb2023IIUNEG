const express = require('express')
const routes = require('../routers/index.router.js')



const app = express()



//middleware
/*app.use(express.json());
app.use(express.urlencoded({extended: false}));*/


//routers
app.use(routes)


app.listen(3001, ()=>{
    console.log('servidor escuchando en el puerto 3001')
})





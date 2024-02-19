const express = require('express')
const routes = require('../routers/index.router.js')



const app = express()



//middleware
/*app.use(express.json());
app.use(express.urlencoded({extended: false}));*/


//routers
app.use(routes);

/*sconst { Pool }  = require ('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'desarrollo',
    password: 'desarrollo',
    port: 5432
})

const loquesa = async() =>{
  const result = await pool.query('SELECT *FROM usuario')
  console.log(result.rows)
}

loquesa()*/


app.listen(3001, ()=>{
    console.log('servidor escuchando en el puerto 3001')
})





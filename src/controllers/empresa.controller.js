const pool = require('../bbdd/postgres.js')


const controller = {};

module.exports = {
    
  const : insertar = async() => {
     if (id == idcandidato){
    const result = 'INSERT INTO empresa(codemp, codofer, nombreemp, rubro, anosfundada, cantidadempleados, ubicacion) VALUES ($1,$2,$3,$4,$5,$6, $7)'
    const valores= [$1,$2,$3,$4,$5,$6, $7]
    
    const res = await pool.query(result,valores)
    console.log(res.rows)
    console.log('insercion exitosa')
    }
   
  },

  const : ver = async() =>{
      const result = await pool.query('SELECT *FROM empresa')
      console.log(result.rows)
  },

   

    /*const : editar = async() => {
    const result = 'update empresa set nombreemp= $3, ubicacion = $7 where codemp=$1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('actualizacion exitosa')
},*/


  const : borrar = async($1) => {
    const result = 'delete from empresa where codemp = $1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('borrado exitoso')
  },
};
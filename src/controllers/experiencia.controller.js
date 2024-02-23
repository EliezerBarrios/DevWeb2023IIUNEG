const pool = require('../bbdd/postgres.js')


const controller = {};

module.exports = {
    
  const : insertar = async() => {
   
    const result = 'INSERT INTO candidato(codexp, nombreempresa, fechainicio, fechaculmin, ramoempresa, cargoejercido) VALUES ($1,$2,$3,$4,$5,$6)'
    const valores= [$1,$2,$3,$4,$5,$6]
    
    const res = await pool.query(result,valores)
    console.log(res.rows)
    console.log('insercion exitosa')
   
  },

  const : ver = async() =>{
      const result = await pool.query('SELECT *FROM experiencia')
      console.log(result.rows)
  },

   

    /*const : editar = async() => {
    const result = 'update experiencia set nombreempresa = $2, cargoeercido = $6 where codexp=$1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('actualizacion exitosa')
},*/


  const : borrar = async($1) => {
    const result = 'delete from experiencia where codexp = $1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('borrado exitoso')
  },
};
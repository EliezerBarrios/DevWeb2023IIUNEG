const pool = require('../bbdd/postgres.js')


const controller = {};

module.exports = {
    
  const : insertar = async() => {
     if (id == idcandidato){
    const result = 'INSERT INTO oferta(codofer, titulo, descripcion, habilidad, rangosalarial, modalidad) VALUES ($1,$2,$3,$4,$5,$6)'
    const valores= [$1,$2,$3,$4,$5,$6]
    
    const res = await pool.query(result,valores)
    console.log(res.rows)
    console.log('insercion exitosa')
    }
   
  },

  const : ver = async() =>{
      const result = await pool.query('SELECT *FROM oferta')
      console.log(result.rows)
  },

   

    /*const : editar = async() => {
    const result = 'update oferta set titulo = $2, rangosalarial = $5 where codofer=$1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('actualizacion exitosa')
},*/


  const : borrar = async($1) => {
    const result = 'delete from oferta where codofer = $1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('borrado exitoso')
  },
};
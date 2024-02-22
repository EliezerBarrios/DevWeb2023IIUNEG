const pool = require('../bbdd/postgres.js')


const controller = {};

module.exports = {
    
  const : insertar = async() => {
    const result = 'INSERT INTO candidato(idcandidato, id, codexp, codedu, nombre, apellido, usuario, contrasena, fechanacimiento, email, nacionalidad, foto) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)'
    const valores= []

    const res = await pool.query(result,valores)
    console.log(res.rows)
   
  },

  const : ver = async() =>{
      const result = await pool.query('SELECT *FROM candidato')
      console.log(result.rows)
  },

   

    /*const : editar = async() => {
    const result = 'update usuario set nombre= 'manuel', apellido= 'montenegro' where id=1380;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('actualizacion exitosa')
},*/


  const : borrar = async($1) => {
    const result = 'delete from candidato where idcandidato = $1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('borrado exitoso')
  },
};
const pool = require('../bbdd/postgres.js')


const controller = {};

module.exports = {

  const : insertar = async() => {
    const result = 'INSERT INTO usuario(id, nombre, apellido, email, nacionalidad, fechanacimiento) VALUES ($1,$2,$3,$4,$5,$6)'
    const valores= [1381,'manuel', 'montes', 'manuelmontes@gmail.com', 'venezolano', '2001-08-23']

    const res = await pool.query(result,valores)
    console.log(res.rows)
   
  },

  const : ver = async() =>{
      const result = await pool.query('SELECT *FROM usuario')
      console.log(result.rows)
  },

   

    /*const : editar = async($1) =>{
        const result = await pool.query('update usuario set id = $1, nombre = $2, apellido = $3, email = $4, nacionalidad = $5, fechanacimiento = $6  where id=$1',
         [id, nombre, apellido, email, nacionalidad, fechanacimiento])
        console.log(result.rows)
      },*/


  const : borrar = async($1) => {
    const result = 'delete from usuario where id = $1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('borrado exitoso')
  },
};

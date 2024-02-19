const { Pool }  = require ('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'desarrollo',
    password: 'desarrollo',
    port: 5432
});

const controller = {};

module.exports = {

    const : ver = async() =>{
        const result = await pool.query('SELECT *FROM usuario')
        console.log(result.rows)
      },

    const : insertar = async() => {
        let result = await pool.query('insert into usuario(id, nombre, apellido, email, nacionalidad, fechanacimiento),values ($1,$2,$3, $4, $5, $6)', 
        [id, nombre, apellido, email, nacionalidad, fechanacimiento])
        return result

      },

    const : editar = async(id) =>{
        const result = await pool.query('update usuario set id = $1, nombre = $2, apellido = $3, email = $4, nacionalidad = $5, fechanacimiento = $6  where id=$1',
         [id, nombre, apellido, email, nacionalidad, fechanacimiento])
        console.log(result.rows)
      },

      const :  eliminar = async() =>{
        const result = await pool.query('SELECT *FROM usuario')
        console.log(result.rows)
      }
};

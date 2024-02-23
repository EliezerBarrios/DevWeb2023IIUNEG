const pool = require('../bbdd/postgres.js')


const controller = {};

module.exports = {
    
  const : insertar = async() => {
     if (id == idcandidato){
    const result = 'INSERT INTO administrador(codadmin, id, usuarioadmin, contrasenadmin, privilegios, foto) VALUES ($1,$2,$3,$4,$5,$6)'
    const valores= [$1,$2,$3,$4,$5,$6]
    
    const res = await pool.query(result,valores)
    console.log(res.rows)
    console.log('insercion exitosa')
    }
   
  },

  const : ver = async() =>{
      const result = await pool.query('SELECT *FROM administrador')
      console.log(result.rows)
  },

   

    /*const : editar = async() => {
    const result = 'update administrador set usuarioadmin = $3, contrasenadmin = $4 where codadmin=$1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('actualizacion exitosa')
},*/


  const : borrar = async($1) => {
    const result = 'delete from administrador where codadmin = $1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('borrado exitoso')
  },
};
const pool = require('../bbdd/postgres.js')


const controller = {};

module.exports = {
    
  const : insertar = async() => {
     if (id == idcandidato){
    const result = 'INSERT INTO candidato(idcandidato, codexp, codedu, usuario, contrasena, foto) VALUES ($1,$2,$3,$4,$5,$6)'
    const valores= [1380,13801, 13801, 'carloscarrillos', 'carlosc123', 'carlosc.jgp']
    
    const res = await pool.query(result,valores)
    console.log(res.rows)
    console.log('insercion exitosa')
    }
   
  },

  const : ver = async() =>{
      const result = await pool.query('SELECT *FROM candidato')
      console.log(result.rows)
  },

   

    /*const : editar = async() => {
    const result = 'update candidato set usuario= $4, contrasena= $5 where id=$1;'
    
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
const pool = require('../bbdd/postgres.js')


const controller = {};

module.exports = {
    
  async insertar (id, idcandidato) {

     if (id == idcandidato){
    const result = 'INSERT INTO candidato(idcandidato, codexp, codedu, usuario, contrasena, foto) VALUES ($1,$2,$3,$4,$5,$6)'
    const valores= [1382,13802, 13802, 'dadieldalto', 'dnield123', 'danield.jgp']
    
    const res = await pool.query(result,valores)
    console.log(res.rows)
    console.log('insercion exitosa')
    }
   
  },

  async ver() {
      const result = await pool.query('SELECT *FROM candidato')
      console.log(result.rows)
  },

  async autenticacion(usuario, contraseña) {

    var result = await pool.query('SELECT *FROM candidato')
    var user = result.fields.usuario
    var password = result.fields.contrasena
    
    if ((usuario && user == false) || (contraseña && password == false)){

      return false
    }
  },
   

    /*const : editar = async() => {
    const result = 'update candidato set usuario= $4, contrasena= $5 where id=$1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('actualizacion exitosa')
},*/


  async borrar($1) {
    const result = 'delete from candidato where idcandidato = $1;'
    
    const res = await pool.query(result)
    console.log(res.rows)
    console.log('borrado exitoso')
  },
};
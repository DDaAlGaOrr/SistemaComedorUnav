const oracledb = require('oracledb');
const dotenv = require('dotenv').config();

const connection = oracledb.getConnection(
  {
    user          : 'system',
    password      : 'oracle',
    connectString : "192.168.1.31:49161" 
  },(err, connection)=>{
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Conectado")
    return connection
  });

module.exports = connection
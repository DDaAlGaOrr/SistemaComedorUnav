const oracledb = require('oracledb');

const connection = oracledb.getConnection(
  {
    user          : process.env.ORACLE_USER,
    password      : process.env.ORACLE_PASSWORD,
    connectString : "192.168.1.31:49161/REG_COMIDAS"
  },(err, connection)=>{
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Conectado")
  });

module.exports = connection
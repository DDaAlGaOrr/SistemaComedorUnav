const oracledb = require("oracledb");
const visitasModel = () => {}

const createConnection = async () => {
    try {
        const connection = await oracledb.getConnection({
          user: "system",
          password: "oracle",
          connectionString: "192.168.1.31:49161/",
        });
        console.log("conectado");
        return connection;
    } catch (error) {
        console.log(error);
    }
};

visitasModel.agregarRegistroComida = async(data)=>{
    const connection = await createConnection();
    const queryInsertTableRegComidas = `INSERT INTO "SYSTEM"."REG_COMIDAS" (FECHA, COMIDA,TIPO, NOMBRE) 
    VALUES (TO_DATE(:1, 'YYYY-MM-DD'),:2,:3,:4)`;
    try {
      return await connection.execute(queryInsertTableRegComidas,
      [data.fecha,data.comida,data.tipo,data.nombre],{autoCommit:true});
    } catch (error) {
      console.log(error);
    }
  }

module.exports = visitasModel
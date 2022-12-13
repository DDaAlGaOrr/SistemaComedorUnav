const oracledb = require("oracledb");
const externoModel = () => {};

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

externoModel.verificarExterno = async(matricula)=>{
  const connection = await createConnection();
  const queryAlumnosExternos = `SELECT AA.CODIGO_PERSONAL, AP.NOMBRE ||' '|| AP.APELLIDO_PATERNO AS NOMBRE FROM ALUM_ACADEMICO AA 
  JOIN ALUM_PERSONAL AP ON AA.CODIGO_PERSONAL = AP.CODIGO_PERSONAL 
  WHERE AA.CODIGO_PERSONAL = ${matricula} AND RESIDENCIA_ID = 'E'`;
  try {
      return await connection.execute(queryAlumnosExternos);
  } catch (error) {
      console.log(error);
  }
}

externoModel.verificarCandado = async(matricula)=>{
  const connection = await createConnection();
  const queryCandadoExternos = `SELECT CODIGO_PERSONAL FROM CAND_ALUMNO WHERE CODIGO_PERSONAL = ${matricula} 
  AND ESTADO = 'A' AND F_CREADO = (SELECT MAX(F_CREADO) FROM CAND_ALUMNO WHERE CODIGO_PERSONAL = ${matricula})`;
  try {
      return await connection.execute(queryCandadoExternos);
  } catch (error) {
      console.log(error);
  }
}

externoModel.agregarRegistroComida = async(data)=>{
  const connection = await createConnection();
  const queryInsertTableRegComidas = `INSERT INTO "SYSTEM"."REG_COMIDAS" (FECHA, COMIDA, CODIGO_PERSONAL, TIPO, NOMBRE) 
  VALUES (TO_DATE(:1, 'YYYY-MM-DD'),:2,:3,:4,:5)`;
  try {
    return await connection.execute(queryInsertTableRegComidas,
    [data.fecha,data.comida,data.matricula,data.tipo,data.nombre],{autoCommit:true});
  } catch (error) {
    console.log(error);
  }
}
module.exports = externoModel;

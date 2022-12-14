const oracledb = require("oracledb");
const internoModel = () => {}

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

internoModel.verificarInternoInscrito = async(matricula)=>{
    const connection = await createConnection();
    const queryAlumnosInternosInscritos = `SELECT DISTINCT AE.CODIGO_PERSONAL, AP.NOMBRE ||' '|| AP.APELLIDO_PATERNO AS NOMBRE FROM ALUM_ESTADO AE
        JOIN ALUM_ACADEMICO AA ON AE.CODIGO_PERSONAL = AA.CODIGO_PERSONAL AND AA.RESIDENCIA_ID = 'I'
        JOIN ALUM_PERSONAL AP ON AE.CODIGO_PERSONAL = AP.CODIGO_PERSONAL
        WHERE AE.CODIGO_PERSONAL = ${matricula}`;
    try {
        return await connection.execute(queryAlumnosInternosInscritos);
    } catch (error) {
        console.log(error);
    }
}

internoModel.verificarCandado = async(matricula)=>{
    const connection = await createConnection();
    const queryVerificarCandado = `SELECT CODIGO_PERSONAL FROM CAND_ALUMNO WHERE CODIGO_PERSONAL = ${matricula} 
      AND ESTADO = 'A' AND F_CREADO = (SELECT MAX(F_CREADO) FROM CAND_ALUMNO WHERE CODIGO_PERSONAL = ${matricula})`;
    try {
      return await connection.execute(queryVerificarCandado);
    } catch (error) {
      console.log(error);
    }
}

// hacer que se valide si el alumno ya tomo su comida 
internoModel.verificarRegistroComida = async(data)=>{
  const connection = await createConnection()
  console.log(data)
  let binds = {
    queryTarget: {
    val: data.fecha, type: oracledb.DATE
  },
}
  const queryVerificarRegistroComida = `SELECT FECHA,COMIDA,CODIGO_PERSONAL FROM reg_comidas
  where FECHA = :fecha`
  try{
    return await connection.execute(queryVerificarRegistroComida,binds)
  }
  catch(error){
    console.log(error)
  }
}
internoModel.agregarRegistroComida = async(data)=>{
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
module.exports = internoModel
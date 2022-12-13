
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
        JOIN CARGA C ON AE.CARGA_ID = C.CARGA_ID AND C.F_INICIO <= NOW AND C.F_FINAL >= NOW
        JOIN ALUM_PERSONAL AP ON AE.CODIGO_PERSONAL = AP.CODIGO_PERSONAL
        WHERE AE.CODIGO_PERSONAL = ${matricula} AND AE.ESTADO = 'I'`;
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
internoModel.agregarRegistroComida = async(data)=>{
    const connection = await createConnection();
    const queryInsertTableRegComidas = `INSERT INTO "SYSTEM"."REG_COMIDAS" (FECHA, COMIDA, CODIGO_PERSONAL, TIPO, NOMBRE) 
    VALUES (TO_DATE('${fecha}', 'YYYY-MM-DD'),'${tipoComida}',${matricula},'${residencia}','${nombreInterno}'`;
    try {
        return await connection.execute(queryInsertTableRegComidas);
    } catch (error) {
        console.log(error);
    }
}
module.exports = internoModel
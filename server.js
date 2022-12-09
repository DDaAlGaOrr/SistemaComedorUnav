const express = require("express");
const res = require("express/lib/response");
const app = express();
const oracledb = require("oracledb");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


const createConnection = async () => {
    try {
        const connection = await oracledb.getConnection({
            user: "system",
            password: "oracle",
            connectionString: "192.168.1.31:49161/",
          });
          console.log('conectado')
          return connection
    } catch (error) {
        console.log(error)
    }
}

// const insertOnTableRegComida = async (fecha,matricula,nombreInterno)=>{
//     const connection = await createConnection()
//     const queryInsertTableRegComidas = `INSERT INTO "SYSTEM"."REG_COMIDAS" (FECHA, COMIDA, CODIGO_PERSONAL, TIPO, NOMBRE) 
//     VALUES (TO_DATE('${fecha}', 'YYYY-MM-DD'),'DESAYUNO',${matricula},'INTERNO','${nombreInterno}'`;
//     try {
//         return await connection.execute(queryInsertTableRegComidas);
//     } catch (error) {
//         console.log(error)
//     }
// }
const verificarInternoInscrito = async (matricula)=>{
    const connection = await createConnection()
    const queryAlumnosInternosInscritos = `SELECT DISTINCT AE.CODIGO_PERSONAL, AP.NOMBRE ||' '|| AP.APELLIDO_PATERNO AS NOMBRE FROM ALUM_ESTADO AE
        JOIN ALUM_ACADEMICO AA ON AE.CODIGO_PERSONAL = AA.CODIGO_PERSONAL AND AA.RESIDENCIA_ID = 'I'
        JOIN CARGA C ON AE.CARGA_ID = C.CARGA_ID AND C.F_INICIO <= NOW AND C.F_FINAL >= NOW
        JOIN ALUM_PERSONAL AP ON AE.CODIGO_PERSONAL = AP.CODIGO_PERSONAL
        WHERE AE.CODIGO_PERSONAL = ${matricula} AND AE.ESTADO = 'I'`;
    try {
        return await connection.execute(queryAlumnosInternosInscritos);
    } catch (error) {
        console.log(error)
    }
}
const verificarCandado = async(matricula)=>{
    const connection = await createConnection()
    const queryVerificarCandado = `SELECT CODIGO_PERSONAL FROM CAND_ALUMNO WHERE CODIGO_PERSONAL = ${matricula} 
    AND ESTADO = 'A' AND F_CREADO = (SELECT MAX(F_CREADO) FROM CAND_ALUMNO WHERE CODIGO_PERSONAL = ${matricula})`;
    try {
        return await connection.execute(queryVerificarCandado);
    } catch (error) {
        console.log(error)
    }
}

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/internoDesayuno", async (req, res) => {
    // const connection = await createConnection()
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);
    const internoInscrito = await verificarInternoInscrito(matricula)

    if(internoInscrito.rows.length != 0){
        const nombreInterno = internoInscrito.rows[0][1];
        console.log(`el alumno con la matricula: ${matricula} es interno y esta inscrito`)
        const tieneCandado = await verificarCandado(matricula)
        if(tieneCandado.rows.length == 0){
            console.log(`el alumno con la matricula: ${matricula} no tiene candado`)
            // const guardarRegistro = await insertOnTableRegComida(fecha,matricula,nombreInterno)
            // console.log(guardarRegistro) 
        }
    }

    // connection.execute(queryAlumnosInternosInscritos, (error, results) => {
    //   if (error) {
    //     console.log(error);
    //   }
    //   if (results.rows.length != 0) {
    //     const nombreInterno = results.rows[0][1];
    //     connection.execute(queryVerificarCandado, (error, results) => {
    //       if (error) {
    //         console.log(error);
    //       }
    //       if (results.rows.length != 0) {
    //         console.log("Alumno interno tiene candado");
    //       } else {
    //         const resultInsert = await insertOnTableREG_COMIDA(fecha,matricula,nombreInterno)
    //         console.log(resultInsert)
    //       }
    //     });
    //   } else {
    //     console.log("Interno no inscrito en el periodo actual");
    //   }
    // });
  });
  app.post("/externoDesayuno", (req, res) => {
    console.log(req.body);
    console.log("desayuno externo");
  });
  app.post("/visitaDesayuno", (req, res) => {
    console.log(req.body);
    console.log("desayuno visita");
  });

  app.post("/internoComida", (req, res) => {
    const fecha = req.body.date;
    const matricula = req.body.matricula;

    console.log(`${fecha} ${matricula}`);
  });
  app.post("/externoComida", (req, res) => {
    console.log(req.body);
    console.log("Comida externo");
  });
  app.post("/visitaComida", (req, res) => {
    console.log(req.body);
    console.log("Comida visita");
  });

  app.post("/internoCena", (req, res) => {
    const fecha = req.body.date;
    const matricula = req.body.matricula;

    console.log(`${fecha} ${matricula}`);
  });
  app.post("/externoCena", (req, res) => {
    console.log(req.body);
    console.log("Cena externo");
  });
  app.post("/visitaCena", (req, res) => {
    console.log(req.body);
    console.log("Cena visita");
  });
app.listen(3000, () => {
  console.log("SERVER corriendo en http://localhost:3000");
});

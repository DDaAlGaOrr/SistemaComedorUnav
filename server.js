const express = require('express');
const { autoCommit } = require('oracledb');
const app = express()
const oracledb = require('oracledb');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));

try {
    const createConnection = async()=>{
      const connection = await oracledb.getConnection({
        user: "system", 
        password: "oracle",
        connectionString: "192.168.1.31:49161/" 
      }) 

      app.get('/',(req,res)=> {
        res.render('index.ejs')
      })
    
    app.post('/internoDesayuno',(req,res)=>{
        const fecha = req.body.date
        const matricula = parseInt(req.body.matricula)
        const queryAlumnosInternosInscritos = `SELECT DISTINCT AE.CODIGO_PERSONAL, AP.NOMBRE ||' '|| AP.APELLIDO_PATERNO AS NOMBRE FROM ALUM_ESTADO AE
        JOIN ALUM_ACADEMICO AA ON AE.CODIGO_PERSONAL = AA.CODIGO_PERSONAL AND AA.RESIDENCIA_ID = 'I'
        JOIN CARGA C ON AE.CARGA_ID = C.CARGA_ID AND C.F_INICIO <= NOW AND C.F_FINAL >= NOW
        JOIN ALUM_PERSONAL AP ON AE.CODIGO_PERSONAL = AP.CODIGO_PERSONAL
        WHERE AE.CODIGO_PERSONAL = ${matricula} AND AE.ESTADO = 'I'`

        const queryVerificarCandado = `SELECT CODIGO_PERSONAL FROM CAND_ALUMNO 
        WHERE CODIGO_PERSONAL = ${matricula} 
        AND ESTADO = 'A' 
        AND F_CREADO = 
        (SELECT MAX(F_CREADO) FROM CAND_ALUMNO 
        WHERE CODIGO_PERSONAL = ${matricula})`

        connection.execute(queryAlumnosInternosInscritos,(error,results)=>{
            if(error){
                console.log(error)
            }
            if(results.rows.length != 0){
                const nombreInterno = results.rows[0][1]
                connection.execute(queryVerificarCandado,(error,results)=>{
                    if(error){
                        console.log(error)
                    }
                    if(results.rows.length != 0){
                        console.log('Alumno interno tiene candado')
                    }
                    else{
                        connection.execute(`INSERT INTO "SYSTEM"."REG_COMIDAS"  
                        VALUES (:1,:2,:3,:4,:5)`,[`TO_DATE('${fecha}', 'YYYY-MM-DD'),'DESAYUNO',${matricula},'INTERNO','${nombreInterno}'`],{autoCommit:true},(error,results)=>{
                            if(error){
                                console.log(error)
                            }
                            else{
                                console.log(results)
                            }
                        })
                    }
                })
            }
            else{
                console.log("Interno no inscrito en el periodo actual")
            }
        })
        console.log(`${fecha} ${typeof matricula}`)
    })
    app.post('/externoDesayuno',(req,res)=>{
        console.log(req.body)
        console.log('desayuno externo')
    })
    app.post('/visitaDesayuno',(req,res)=>{
        console.log(req.body)
        console.log('desayuno visita')
    
    })
    
    
    app.post('/internoComida',(req,res)=>{
        const fecha = req.body.date
        const matricula = req.body.matricula
    
        console.log(`${fecha} ${matricula}`)
    })
    app.post('/externoComida',(req,res)=>{
        console.log(req.body)
        console.log('Comida externo')
    })
    app.post('/visitaComida',(req,res)=>{
        console.log(req.body)
        console.log('Comida visita')
    })
    
    
    app.post('/internoCena',(req,res)=>{
        const fecha = req.body.date
        const matricula = req.body.matricula
    
        console.log(`${fecha} ${matricula}`)
    })
    app.post('/externoCena',(req,res)=>{
        console.log(req.body)
        console.log('Cena externo')
    })
    app.post('/visitaCena',(req,res)=>{
        console.log(req.body)
        console.log('Cena visita')
    })
    
      console.log("Conectado")
    }
    createConnection()
  } catch (error) {
    console.log(error)
  }



app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});
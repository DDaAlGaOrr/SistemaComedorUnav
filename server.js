const express = require("express");
const app = express();

const internosRutas = require('./routes/internosRoutes')

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(internosRutas)

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(3000, () => {
  console.log("SERVER corriendo en http://localhost:3000");
});






// app.post("/internoDesayuno", async (req, res) => {
//   const fecha = req.body.date;
//   const matricula = parseInt(req.body.matricula);

//   const internoInscrito = await verificarInternoInscrito(matricula);
//   if (internoInscrito.rows.length != 0) {
//     const nombreInterno = internoInscrito.rows[0][1];
//     const tieneCandado = await verificarCandado(matricula)
//     if (tieneCandado.rows.length == 0) {
//       const guardarRegistro = await insertOnTableRegComida(fecha,matricula,nombreInterno,'DESAYUNO','INTERNO');
//     } else {
//       console.log(`el alumno con la matricula: ${matricula} tiene candado`);
//     }
//   } else {
//     console.log(`el alumno con la matricula: ${matricula} no es interno o no esta inscrito`);
//   }
// });

// app.post("/externoDesayuno", async(req, res) => {
//   console.log(req.body);
//   console.log("desayuno externo");
// });
// app.post("/visitaDesayuno", (req, res) => {
//   console.log(req.body);
//   console.log("desayuno visita");
// });

// app.post("/internoComida", async(req, res) => {
//   const fecha = req.body.date;
//   const matricula = parseInt(req.body.matricula);

//   const internoInscrito = await verificarInternoInscrito(matricula);
//   if (internoInscrito.rows.length != 0) {
//     const nombreInterno = internoInscrito.rows[0][1];
//     const tieneCandado = await verificarCandado(matricula)
//     if (tieneCandado.rows.length == 0) {
//       const guardarRegistro = await insertOnTableRegComida(fecha,matricula,nombreInterno,'COMIDA','INTERNO');
//     } else {
//       console.log(`el alumno con la matricula: ${matricula} tiene candado`);
//     }
//   } else {
//     console.log(`el alumno con la matricula: ${matricula} no es interno o no esta inscrito`);
//   }
// });

// app.post("/externoComida", (req, res) => {
//   console.log(req.body);
//   console.log("Comida externo");
// });
// app.post("/visitaComida", (req, res) => {
//   console.log(req.body);
//   console.log("Comida visita");
// });

// app.post("/internoCena", async(req, res) => {
//   const fecha = req.body.date;
//   const matricula = parseInt(req.body.matricula);

//   const internoInscrito = await verificarInternoInscrito(matricula);
//   if (internoInscrito.rows.length != 0) {
//     const nombreInterno = internoInscrito.rows[0][1];
//     const tieneCandado = await verificarCandado(matricula)
//     if (tieneCandado.rows.length == 0) {
//       const guardarRegistro = await insertOnTableRegComida(fecha,matricula,nombreInterno,'CENA','INTERNO');
//     } else {
//       console.log(`el alumno con la matricula: ${matricula} tiene candado`);
//     }
//   } else {
//     console.log(`el alumno con la matricula: ${matricula} no es interno o no esta inscrito`);
//   }
// });

// app.post("/externoCena", (req, res) => {
//   console.log(req.body);
//   console.log("Cena externo");
// });
// app.post("/visitaCena", (req, res) => {
//   console.log(req.body);
//   console.log("Cena visita");
// });


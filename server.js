const express = require("express");
const app = express();

const internosRutas = require('./routes/internosRoutes')
const externoRutas = require('./routes/externosRoutes')

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(internosRutas)
app.use(externoRutas)

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(3000, () => {
  console.log("SERVER corriendo en http://localhost:3000");
});
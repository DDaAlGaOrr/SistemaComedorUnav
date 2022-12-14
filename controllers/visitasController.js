const visitasModel = require('./../models/visitasModel')
const visitasController = () => {};

visitasController.desayunoVisita = async (req, res) => {
    const nombreVisita = req.body.nombre
    const fecha = req.body.date
    const datosVisita = {
        nombre: nombreVisita,
        fecha: fecha,
        comida: 'DESAYUNO',
        tipo: 'VISITA',
    }
    const resultAgregar = await visitasModel.agregarRegistroComida(datosVisita);
    if(resultAgregar.rowsAffected != 0) {
      res.render("", {
        alert: true,
        icon: "success",
        title: "Registro guardado",
      });
    }
    else{
      res.render("", {
        alert: true,
        icon: "error",
        title: "Ocurrió un error",
      });
    }
};

visitasController.ComidaVisita = async (req, res) => {
    const nombreVisita = req.body.nombre
    const fecha = req.body.date
    const datosVisita = {
        nombre: nombreVisita,
        fecha: fecha,
        comida: 'COMIDA',
        tipo: 'VISITA',
    }
    const resultAgregar = await visitasModel.agregarRegistroComida(datosVisita);
    if(resultAgregar.rowsAffected != 0) {
      res.render("", {
        alert: true,
        icon: "success",
        title: "Registro guardado",
      });
    }else{
      res.render("", {
        alert: true,
        icon: "error",
        title: "Ocurrió un error",
      });
    }
};

visitasController.cenaVisita = async (req, res) => {
    const nombreVisita = req.body.nombre
    const fecha = req.body.date
    const datosVisita = {
        nombre: nombreVisita,
        fecha: fecha,
        comida: 'CENA',
        tipo: 'VISITA',
    }
    const resultAgregar = await visitasModel.agregarRegistroComida(datosVisita);
    if(resultAgregar.rowsAffected != 0) {
      res.render("", {
        alert: true,
        icon: "success",
        title: "Registro guardado",
      });
    }else{
      res.render("", {
        alert: true,
        icon: "error",
        title: "Ocurrió un error",
      });
    }
};

module.exports = visitasController;

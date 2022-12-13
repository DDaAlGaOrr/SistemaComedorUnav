const internoModel = require('./../models/internosModel')
const internosController = () => {}

internosController.desayunoInterno = async(req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);
    const internoInscrito = await internoModel.verificarInternoInscrito(matricula)
}
internosController.comidaInterno = (req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);
    console.log(fecha,matricula)
    console.log('Comida')
}
internosController.CenaInterno = (req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);
    console.log(fecha,matricula)
    console.log('Cena')
}

module.exports = internosController
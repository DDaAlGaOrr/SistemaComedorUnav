const internoModel = require('./../models/internosModel')
const internosController = () => {}

internosController.desayunoInterno = async(req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);

    const internoInscrito = await internoModel.verificarInternoInscrito(matricula)
    if(internoInscrito.rows.length > 0){
        const nombreInterno = internoInscrito.rows[0][1];
        const internoCandado = await internoModel.verificarCandado(matricula)
        if(internoCandado.rows.length == 0){
            const internoDesayuno = {
                nombre: nombreInterno,
                matricula: matricula,
                fecha: fecha,
                comida: 'DESAYUNO',
                tipo: 'INTERNO',
            }
            const resultAgregar = await internoModel.agregarRegistroComida(internoDesayuno)
            console.log(resultAgregar.rowsAffected)
        }
        else{
            console.log('Alumno interno tiene candado')
        }
    }
    else{
        console.log('No es interno o no esta inscrito')
    }
}
internosController.comidaInterno = async(req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);
    const internoInscrito = await internoModel.verificarInternoInscrito(matricula)
    if(internoInscrito.rows.length > 0){
        const nombreInterno = internoInscrito.rows[0][1];
        const internoCandado = await internoModel.verificarCandado(matricula)
        if(internoCandado.rows.length == 0){
            const internoDesayuno = {
                nombre: nombreInterno,
                matricula: matricula,
                fecha: fecha,
                comida: 'COMIDA',
                tipo: 'INTERNO',
            }
            const resultAgregar = await internoModel.agregarRegistroComida(internoDesayuno)
            console.log(resultAgregar.rowsAffected)
        }
        else{
            console.log('Alumno interno tiene candado')
        }
    }
    else{
        console.log('No es interno o no esta inscrito')
    }
}
internosController.CenaInterno = async(req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);

    const internoInscrito = await internoModel.verificarInternoInscrito(matricula)
    if(internoInscrito.rows.length > 0){
        const nombreInterno = internoInscrito.rows[0][1];
        const internoCandado = await internoModel.verificarCandado(matricula)
        if(internoCandado.rows.length == 0){
            const internoDesayuno = {
                nombre: nombreInterno,
                matricula: matricula,
                fecha: fecha,
                comida: 'CENA',
                tipo: 'INTERNO',
            }
            const resultAgregar = await internoModel.agregarRegistroComida(internoDesayuno)
            console.log(resultAgregar.rowsAffected)
        }
        else{
            console.log('Alumno interno tiene candado')
        }
    }
    else{
        console.log('No es interno o no esta inscrito')
    }
}

module.exports = internosController
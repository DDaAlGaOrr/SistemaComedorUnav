const externosModel = require('./../models/externosModel')
const externosController = () => {}

externosController.desayunoExterno = async(req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matriculaDesayunoExterno);

    const verificarExterno = await externosModel.verificarExterno(matricula)
    if(verificarExterno.rows.length > 0){
        const nombreExterno = verificarExterno.rows[0][1];
        const verificarCandado = await externosModel.verificarCandado(matricula)
        if(verificarCandado.rows.length == 0){
            const datosExterno = {
                nombre: nombreExterno,
                matricula: matricula,
                fecha: fecha,
                comida: 'DESAYUNO',
                tipo: 'EXTERNO',
            }
            const resultAgregar = await externosModel.agregarRegistroComida(datosExterno)
            console.log(resultAgregar)
        }
    }
    console.log(verificarExterno)
}

module.exports = externosController
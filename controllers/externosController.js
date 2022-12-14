const externosModel = require('./../models/externosModel')
const externosController = () => {}

externosController.desayunoExterno = async(req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);

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
            if(resultAgregar.rowsAffected != 0){
                res.render('',{
                    alert:true,
                    icon: 'success',
                    title: 'Alumno permitido',
                })
            }
        }else{
            res.render('',{
                alert:true,
                icon: 'error',
                title: 'Alumno tiene candado',
            })
        }
    }else{
        res.render('',{
            alert:true,
            icon: 'error',
            title: 'No es alumno externo',
        })
    }
}

externosController.comidaExterno = async(req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);

    const verificarExterno = await externosModel.verificarExterno(matricula)
    if(verificarExterno.rows.length > 0){
        const nombreExterno = verificarExterno.rows[0][1];
        const verificarCandado = await externosModel.verificarCandado(matricula)
        if(verificarCandado.rows.length == 0){
            const datosExterno = {
                nombre: nombreExterno,
                matricula: matricula,
                fecha: fecha,
                comida: 'COMIDA',
                tipo: 'EXTERNO',
            }
            const resultAgregar = await externosModel.agregarRegistroComida(datosExterno)
            if(resultAgregar.rowsAffected != 0){
                res.render('',{
                    alert:true,
                    icon: 'success',
                    title: 'Alumno permitido',
                })
            }
        }else{
            res.render('',{
                alert:true,
                icon: 'error',
                title: 'Alumno tiene candado',
            })
        }
    }else{
        res.render('',{
            alert:true,
            icon: 'error',
            title: 'No es alumno externo',
        })
    }
}

externosController.cenaExterno = async(req,res)=>{
    const fecha = req.body.date;
    const matricula = parseInt(req.body.matricula);

    const verificarExterno = await externosModel.verificarExterno(matricula)
    if(verificarExterno.rows.length > 0){
        const nombreExterno = verificarExterno.rows[0][1];
        const verificarCandado = await externosModel.verificarCandado(matricula)
        if(verificarCandado.rows.length == 0){
            const datosExterno = {
                nombre: nombreExterno,
                matricula: matricula,
                fecha: fecha,
                comida: 'CENA',
                tipo: 'EXTERNO',
            }
            const resultAgregar = await externosModel.agregarRegistroComida(datosExterno)
            if(resultAgregar.rowsAffected != 0){
                res.render('',{
                    alert:true,
                    icon: 'success',
                    title: 'Alumno permitido',
                })
            }
        }else{
            res.render('',{
                alert:true,
                icon: 'error',
                title: 'Alumno tiene candado',
            })
        }
    }else{
        res.render('',{
            alert:true,
            icon: 'error',
            title: 'No es alumno externo',
        })
    }
}

module.exports = externosController
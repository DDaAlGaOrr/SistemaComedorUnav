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
                if(resultAgregar.rowsAffected != 0){
                    res.render('',{
                        alert:true,
                        icon: 'success',
                        title: 'Alumno permitido',
                    })
                }
        }
        else{
            res.render('',{
                alert:true,
                icon: 'error',
                title: 'Alumno tiene candado',
            })
        }
    }
    else{
        res.render('',{
            alert:true,
            icon: 'error',
            title: 'No es alumno interno',
        })
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
            if(resultAgregar.rowsAffected != 0){
                res.render('',{
                    alert:true,
                    icon: 'success',
                    title: 'Alumno permitido',
                })
            }
        }
        else{
            res.render('',{
                alert:true,
                icon: 'error',
                title: 'Alumno tiene candado',
            })
        }
    }
    else{
        res.render('',{
            alert:true,
            icon: 'error',
            title: 'No es alumno interno',
        })
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
            if(resultAgregar.rowsAffected != 0){
                res.render('',{
                    alert:true,
                    icon: 'success',
                    title: 'Alumno permitido',
                })
            }
        }
        else{
            res.render('',{
                alert:true,
                icon: 'error',
                title: 'Alumno tiene candado',
            })
        }
    }
    else{
        res.render('',{
            alert:true,
            icon: 'error',
            title: 'No es alumno interno',
        })
    }
}

module.exports = internosController
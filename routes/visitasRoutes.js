const express = require('express')
const router = express.Router()
const visitasController = require('./../controllers/visitasController')

router
    .post('/visitaDesayuno',visitasController.desayunoVisita)
    .post('/visitaComida',visitasController.ComidaVisita)
    .post('/visitaCena',visitasController.cenaVisita)

module.exports = router
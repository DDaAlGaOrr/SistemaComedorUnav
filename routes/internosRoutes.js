const express = require('express')
const router = express.Router()
const internosController = require('./../controllers/internosController')

router
    .post('/internoDesayuno',internosController.desayunoInterno)
    .post('/internoComida',internosController.comidaInterno)
    .post('/internoCena',internosController.CenaInterno)

module.exports = router
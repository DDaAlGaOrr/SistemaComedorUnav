const express = require('express')
const router = express.Router()
const internosController = require('./../controllers/internosController')

router
    .post('/internoDesayuno',internosController.desayunoInterno)
    .post('/internoComida')
    .post('/internoCena')

module.exports = router
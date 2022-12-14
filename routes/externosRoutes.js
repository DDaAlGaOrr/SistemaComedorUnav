const express = require('express')
const router = express.Router()
const externosController = require('./../controllers/externosController')

router
    .post('/externoDesayuno',externosController.desayunoExterno)
    .post('/externoComida',externosController.comidaExterno)
    .post('/externoCena',externosController.cenaExterno)

module.exports = router
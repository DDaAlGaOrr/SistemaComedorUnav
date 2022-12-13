const express = require('express')
const router = express.Router()
const externosController = require('./../controllers/externosController')

router
    .post('/externoDesayuno',externosController.desayunoExterno)
    .post('/externoComida',externosController)
    .post('/externoCena',externosController)

module.exports = router
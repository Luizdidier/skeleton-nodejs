const express = require('express')
const router = express.Router()
const clientController = require('./client_controller')

/* GET home page. */
router.route('/client/:email').get(
    clientController.addEmailUser,
)

module.exports = router

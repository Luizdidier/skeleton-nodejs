const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const clientRoute = require('./api/client_route/index')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', clientRoute)

app.listen(3000, () => {
    console.log('Server is run...');   
})

module.exports = app

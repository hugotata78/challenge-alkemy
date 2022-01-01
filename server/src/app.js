//modules and libraries
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const apiRouter = require('./routes/api')

//initializing app
const app = express()

//db
require('./db/db')

//setting
app.set('name', 'Server')
app.set('port', process.env.PORT || 4000)

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

//routes
app.use('/api',apiRouter)

//export module app
module.exports = app
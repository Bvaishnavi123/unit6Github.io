const express = require('express')

const app = express()
app.use(express.json())
const productController  = require('./controller/entity.controller')
app.use('/entity',productController)


module.exports = app

const express = require('express');
let app = express();
app.use(express.json())
const userController = require('./controller/userController')
const productController = require('./controller/productController')
const brandController = require('./controller/brandController')
var cors = require('cors')
app.use(cors())
app.use('/user',userController)
app.use('/product',productController)
app.use('/brand',brandController)

module.exports = app

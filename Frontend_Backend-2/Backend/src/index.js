const express = require('express');
let app = express();
app.use(express.json())
const userController = require('./controller/userController')
const productController = require('./controller/productController')
const brandController = require('./controller/brandController')
const reviewController = require('./controller/reviewController')
const orderController = require('./controller/orderController')
const categoryController = require('./controller/categoryController')
var cors = require('cors')
app.use(cors())
app.use('/user',userController)
app.use('/product',productController)
app.use('/brand',brandController)
app.use('/review',reviewController)
app.use('/order',orderController)
app.use('/category',categoryController)


module.exports = app

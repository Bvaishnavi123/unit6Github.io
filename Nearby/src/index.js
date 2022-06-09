const express = require('express')
const NeighbourController= require('./controller/neighbour.controller')
const RestaurantController = require('./controller/restaurant.controller')
const app = express()
app.use(express.json())

app.use('/neighbour', NeighbourController )
app.use('/restaurant', RestaurantController )
module.exports=app
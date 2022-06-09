const express = require('express');
const Restaurant = require('../model/restaurant.model')
const router = express.Router();

router.post('',async(req,res)=>{
    try {
        const restaurant = await Restaurant.create(req.body);
        return res.status(201).send(restaurant);
    } catch (error) {
        return res.status(500).send(error);
    }
})

router.get('',async(req,res)=>{
try {
    const restaurants = await Restaurant.find({ location : { $nearSphere : [ req.body.location.coordinate[0], req.body.location.coordinate[1] ]} }).lean().exec();
    return res.status(200).send(restaurants)
} catch (error) {
    return res.status(500).send(error)
}
})

module.exports = router
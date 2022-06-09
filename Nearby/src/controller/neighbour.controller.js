const express = require('express');
const router = express.Router();
const Neighbour = require('../model/neighbourhood.model')

router.post('', async(req,res)=>{
    try {
        const neighbour = await Neighbour.create(req.body);
        return res.status(201).send(neighbour)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get('', async(req,res)=>{
    try {
        const neighbours = await Neighbour.find({
            location: {
               $nearSphere: {
                  $geometry: {
                     type : "Point",
                     coordinates : [ req.body.location.coordinates[0],req.body.location.coordinates[1] ]
                  }
               }
            }
          })
          return res.status(200).send(neighbours)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router
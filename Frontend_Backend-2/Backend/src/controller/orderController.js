const express = require('express')
const router = express.Router();
const Order = require('../model/order.model')

router.get('/',async(req,res)=>{
    try {
        const order = await Order.find().populate('user').populate('product').lean().exec()
        res.status(200).send({order:order})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/create',async(req,res)=>{
    try {
        const order = await Order.create(req.body)
        res.status(201).send({order:order})
    } catch (error) {
        res.status(404).send(error)
    }
})
router.patch('/:id/edit',async(req,res)=>{
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec()
        res.status(200).send({order:order})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:id/edit',async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id).lean().exec()
        res.status(200).send({order:order})
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
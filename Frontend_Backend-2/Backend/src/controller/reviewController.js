const express = require('express')
const router = express.Router();
const Review = require('../model/review.model')

router.get('/',async(req,res)=>{
    try {
        const review = await Review.find().populate({path:'user',select:{name:1,email:1}}).populate('product').lean().exec()
        res.status(200).send({review:review})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/create',async(req,res)=>{
    try {
        const review = await Review.create(req.body)
        res.status(201).send({review:review})
    } catch (error) {
        res.status(404).send(error)
    }
})
router.patch('/:id/edit',async(req,res)=>{
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec()
        res.status(200).send({review:review})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:id/edit',async(req,res)=>{
    try {
        const review = await Review.findById(req.params.id).lean().exec()
        res.status(200).send({review:review})
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports=router

const express = require('express')
const router = express.Router();
const Category = require('../model/category.model')


router.get('/',async(req,res)=>{
    try {
        const category = await Category.find().lean().exec()
        res.status(200).send({category:category})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/create',async(req,res)=>{
    try {
        const category = await Category.create(req.body)
        res.status(201).send({category:category})
    } catch (error) {
        res.status(404).send(error)
    }
})
router.patch('/:id/edit',async(req,res)=>{
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec()
        res.status(200).send({category:category})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:id/edit',async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id).lean().exec()
        res.status(200).send({category:category})
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
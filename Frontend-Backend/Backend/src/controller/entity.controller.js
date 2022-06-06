const Product = require('../model/entity.model')
const express = require('express')
const router= express.Router()

// router.get('/',async(req,res)=>{
//   try {
   

//       const products = await Product.find().lean().exec()
//       res.status(200).send(products)
//   } catch (error) {
//       res.status(404).send(error)
//   }

// })

router.get('/',async(req,res)=>{
    try {
      const page = req.query.page || 1;
      const pageSize = req.query.pageSize || 10;
      const skip = (page-1)*pageSize
      const sortVariable = req.query.sort || 1
      if(sortVariable==1){
        sort = {priceOfProduct:1}
      }else{
        sort = {priceOfProduct:-1}
      }
      const filter = {}
      const productBrand = req.query.productBrand
      if(productBrand){
        filter.productBrand={$in:productBrand}
      }
      const totalPage = Math.ceil(await Product.find(filter).countDocuments()/pageSize)
     
      const products = await Product.find(filter).skip(skip).limit(pageSize).sort(sort).lean().exec()
        res.status(200).send({products:products,totalPage:totalPage})
    } catch (error) {
        res.status(404).send(error)
    }

})


router.post('/',async(req,res)=>{
    try {
        const products = await Product.create(req.body)
        res.status(201).send(products)
    } catch (error) {
        res.status(500).send(error)
    }

})

router.get('/:id',async(req,res)=>{
    try {
        const products = await Product.findById(req.params.id).lean().exec()
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send(error)
    }

})

router.patch('/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      res.status(200).send({ Products: product })
    } catch (error) {
      return res.status(404).send('not found')
    }
  })
  
  router.delete('/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id)
      res.status(200).send({ Products: product })
    } catch (error) {
      return res.status(404).send('not found')
    }
  })
  
  module.exports = router





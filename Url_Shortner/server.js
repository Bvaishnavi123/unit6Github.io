const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./Models/shortUrl')
const app = express()
mongoose.connect('mongodb+srv://vaishnavi:vaishnavi@cluster0.eczcrmc.mongodb.net/?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get('/',async(req,res)=>{
   const shorturls = await ShortUrl.find()
   res.render('index',{shorturls:shorturls})
})
app.post('/shortUrls',async(req,res)=>{
await ShortUrl.create({full:req.body.url})
res.redirect('/')
})
app.get('/:shortUrl',async(req,res)=>{
 const shortUrl = await ShortUrl.findOne({short:req.params.shortUrl})
 if (shortUrl == null) return res.sendStatus(404);

    shortUrl.clicks++;
    shortUrl.save()
    res.redirect(shortUrl.full);
})

app.listen(process.env.PORT||5000)
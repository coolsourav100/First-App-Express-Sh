const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    // res.send(`<html><body><form action ='/admin/product' method='POST'><input type='text' name='title'/><input type='number' name='size'/><button type='submit'>Submit</button></form></body></html>`)
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    
    
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
res.redirect('/shop')
})

module.exports = router
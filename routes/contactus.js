const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const Droot = require('../util/path')

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(Droot,'views','contactus.html'))
})

router.post('/success',(req,res,next)=>{
    if(req.body.name && req.body.email){

        res.send(`<h1>From Fill Success </h1>`)
    }else{
        res.send(`<h1>From Fill Failure</h1>`)
    }
})
module.exports = router
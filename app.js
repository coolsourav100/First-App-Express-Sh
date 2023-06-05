const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',(req,res,next)=>{
    console.log('Always Running.....!!!')
    next()
})
app.use('/add-product',(req,res,next)=>{
    res.send(`<html><body><form action ='/product' method='POST'><input type='text' name='title'/><input type='number' name='size'/><button type='submit'>Submit</button></form></body></html>`)
    
    
})
app.post('/product',(req,res,next)=>{
    console.log(req.body)
res.redirect('/')
})
app.use('/',(req,res,next)=>{
    console.log('We in the different  middlewere')
    res.send('<h1>Welcome To Expres js v-4</h1>')
    
})

// const server = http.createServer(app)
// server.listen(3000)

app.listen(3000)
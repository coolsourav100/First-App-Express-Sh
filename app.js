const http = require('http')
const express = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log('We in the middlewere')
    next()
})
app.use((req,res,next)=>{
    console.log('We in the another middlewere')
    // res.send('<h1>Hello Froem Express Js!!</h1>')
    res.send({key:'val1'})
})

// const server = http.createServer(app)
// server.listen(3000)

app.listen(3000)
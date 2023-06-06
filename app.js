
const express = require('express')
const app = express()
const path = require('path')
const routerAdmin = require('./routes/admin')
const shopRouter = require('./routes/shop')
const contactRouter = require('./routes/contactus')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',routerAdmin)
app.use('/shop',shopRouter)
app.use('/contactus',contactRouter)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','404.html'))
})



app.listen(3000)

const express = require('express')
const app = express()
const routerAdmin = require('./routes/admin')
const shopRouter = require('./routes/shop')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',routerAdmin)
app.use('/shop',shopRouter)
app.use((req,res,next)=>{
    res.status(404).send(`<h1>Page Not Found !!! Error - 404</h1>`)
})



app.listen(3000)
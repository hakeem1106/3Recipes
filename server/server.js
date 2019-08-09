require('dotenv').config()
const express = require('express')
    app = express()
    port = process.env.PORT || 5000
    bodyParser = require('body-parser')
    mongoose = require('mongoose')
    db = mongoose.connect(`${process.env.DB}`,{useNewUrlParser:true})
    router = require('./routes/index')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)
app.get('*', (req,res)=>{
res.send("connected")
})
app.listen(port, ()=>console.log(`Server running on port ${port}`))


const express = require('express')
const {join} = require("path");
const app = express()
app.use(express.static('public'))
app.get("/", (req,res ) =>{
    res.sendFile(join(__dirname, 'public/index.html'))
})
app.listen(process.env.PORT || 3000)
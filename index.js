const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 1002

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname +'public/index.html'));
    //__dirname : It will resolve to your project folder.
  });


app.listen(PORT, () => {
    console.log("Up and running")
})
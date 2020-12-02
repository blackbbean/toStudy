const express = require('express')
const app = express()
const port = 3000

const toDoLists=["Key공부"]

app.set('view engine','pug')
app.get('/',(req,res)=>{
    res.render('index',{toDoListTitle:'The things to do : ' + 
                toDoLists.length,
                toDoLists:toDoLists})
})

app.listen(port,()=>{
    console.log('connected')
})
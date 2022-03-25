var express = require('express');

var app = express();

app.get('/index' ,(req,res)=>{
    res.send('Hey welcome to express js')
})


app.listen(3000, ()=> {
    console.log('Server is runing on 3k port')
})
var express = require ('express');

var app = express();

function logger (req,res,next){
    console.log(req.method, req.url)
    next();
}

// app.use(logger);

app.use("/",logger)

app.get('/', (req,res) =>{
    res.send('Welcome');
});

app.listen(3000, ()=>{
    console.log('server listening on port 3k')
})
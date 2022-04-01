
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

// add middlewares for form/json

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// add middleware for handling static assets

app.use(express.static(__dirname ));

// add thirdparty middlewares
//logger to keep track of our every request and response use morgan middleware

app.use(logger('dev'));

// adding the cookie and send cookie to user
app.use(cookieParser());
app.use((req,res,next)=>{
    res.cookie("server", "conected to localhost:4000");
    next();
});

// Handling the route /

app.get("/",(req,res)=>{
    res.send(`<h1>I am Abhishek<h1>`)
})

//handling the route /users

app.get("/users",(req,res)=>{
    res.send("handling the get route on /users ")
})

// hadling the main page on /route

app.get("/route",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

// handling the project page on /projects

app.get("/projects",(req,res)=>{
    res.sendFile(__dirname + "/project.html");
});

//add middlewaresfor handling error

app.use((req,res,next)=>{
    res.send('Page Not Found');
});

app.use((err,req,res,next)=>{
    res.send(err);
});




app.listen(4000,() => {
    console.log('Server listening on port 4k');
});
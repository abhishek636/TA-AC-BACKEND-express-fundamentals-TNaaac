let express = require("express");
let app = express();

app.use("/admin",(req,res,next) =>{
    next("Unautharizer user")
})


app.get("/", (req, res) => {
    res.send("Welcome  to the home page ");
});
//handling  the route /about
app.get("/about", (req, res) => {
    res.send("this is the about us page . Get to know about us");
});

// Error handling midddelware if the route is other than the '/' and '/about  then this will thorow an error'
// handling the route /
app.use((req, res, next) => {
    res.send('Page not Found')
});


// Listening  the Request on the server on the port 7K
app.listen(5000, () => {
  console.log("listening the request on the port 5K");
});
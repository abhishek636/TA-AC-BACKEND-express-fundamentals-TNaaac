var http = require('http');

var date = new Date();

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req.method, req.url);
    console.log(date);
    let store = "";
    req.on("data", (chunk) => {
        store += chunk;
    });
    req.on("end", () => {
        req.body = store;
        console.log(req.body);
    });
};



server.listen(1000,(req,res)=>{
    console.log('Server listening on port 1K')
})
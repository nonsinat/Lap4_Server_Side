const express = require("express");
const app = express();
const route = require("./routes/asymmetric_route")

app.use(express.json());

app.use('/api/v1/asymmetric',route);

app.get('/',function(req,res){
    console.log("Get User API");
    res.end();
});

const port = process.env.port || 4000;

app.listen(port, function(){
    console.log("now listening for requests");
});

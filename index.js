var express = require("express");
var index = express();

index.set("view engine","ejs");
index.use(express.static(__dirname + "/public"));


//ROUTES
index.get("/",function(req,res){
    res.render("home");
});

index.get("/angry",function(req,res){
    res.render("angry");
});

index.get("/motivated",function(req, res) {
    res.render("option");
});

index.get("/bored",function(req, res) {
    res.render("instaPage");
});

index.get("/submit",function(req, res) {
    res.render("submit");
})

index.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is listening");
});

const functions = require("./functions");
const express = require("express");
const path = require("path");
const server = express();
const port = process.env.PORT ||3000;
const x = 11;

server.set("view engine", "hbs")
server.use("/assets",express.static(path.join(__dirname,"./assets")));
server.use("/js",express.static(path.join(__dirname,"./js")));

server.get("/",function (req,res){
    res.render("index",{
        pageTitle: "Lekcja Node",
        title: functions.add2,
        subTitle: functions.someFunction(),
       subSubTitle : x>10 ? functions.someFunction() : null
    })
})

server.get("/about",function (req,res){
    res.render("about")
})

server.get("/section/technology",function (req,res){
    res.send("strona technologiczna")
})

server.listen(port, (err)=>{
    if(err) {return console.log(`something is going wrong ${err}`)}
    console.log(`Aplikacja działa na porcie ${port}`)
});


var express=require("express");
var bodyParser=require("body-parser");
var multer=require("multer");

// var routes=require("./")
var app=express();

//parse the application

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ 
	limit: '50mb',
	extended: true, 
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

var PORT=process.env.PORT || 8000;

app.listen(PORT,function(){
    console.log("Listening on PORT")
});
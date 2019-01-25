const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const product=require("./routes/product.route");

const app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/Product",product);

app.listen(3000,function(){
    console.log("server started");
})
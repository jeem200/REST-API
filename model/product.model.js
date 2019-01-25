let mongoose=require("mongoose");

let ProductSchema=mongoose.Schema({

    Name:
    {
        type:String,
        required:true
    },
    Price:
    {
        type:Number,
        required:true
    },
    Description:
    {
        type:String,
        required:true
    },
    ImagePath:
    {
        type:String,
        required:true
    }
});

let Product=module.exports=mongoose.model("Product",ProductSchema);
const mongoose=require('mongoose');
const ServiceSchema=new mongoose.Schema(
    {
        id:Number,
        image:String,
        category:String,
        price:Number
    }
)
module.exports=mongoose.model("api",ServiceSchema,'api');
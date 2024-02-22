const express=require('express');
require('./components/configure');
const Userdata=require('./components/userdata')
const Login=require('./components/login');
const Service=require('./components/items')
const stripe=require("stripe")("sk_test_51OAUL3SBpye6i6eaUAHldKfoLG3dkrL4nQIJcsQ2bnpdjgaUPvm5EEyIcXFUlfjGAiF395SbkkBWcHcG5lcVVhln00I9TwVhPT")
const cors=require('cors');

const server=express();

server.use(cors());
server.use(express.json());


// signup
server.post('/user',async(req,res)=>{
    let data = new Userdata(req.body);
    let result=await data.save();

    console.log(result)
    res.json(result)
})
// login
server.post('/login',async(req,res)=>{
    let data= await Userdata.findOne(req.body)

    if(data){
        res.send(data)
    }else{
        res.send({result:'no data found'})
    }
})
// api crete
server.post('/createapi',async(req,res)=>{
    let data=new Service(req.body)
    let result=await data.save()

    console.log(result)
    res.json(result)
})
// api get
server.get('/api',async(req,res)=>{
    let data=await Service.find()

    console.log(data)
    res.json(data)
})
//payment api
server.post('/api/create-checkout-session',async(req,res)=>{
const {products} =req.body;
const lineItems=products.map((product)=>({
    price_data:{
        currency:"inr",
        product_data:{
            name:product.category
        },
        unit_amount:product.price * 100,
    },
    quantity:product.qnty
}));
const session=await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    mode:"payment",
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/cancel",
});
  res.json({id:session.id})
})
server.listen(4000,()=>{
    console.log('server started on port 4000')
})
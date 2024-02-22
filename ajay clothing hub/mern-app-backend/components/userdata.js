const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema(
    {   

      fullname: String,
      email: String,
      password: String,
      cPassword: String,
      phoneNo: String,
    }
)

module.exports=mongoose.model('userdata',UserSchema,'userdata');
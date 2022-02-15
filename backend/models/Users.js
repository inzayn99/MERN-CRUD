const mongo = require('mongoose');
const Scheme =mongoose.Schema;

let userSchema=new Scheme({
    name:{
        type:String,
    },
    address:{
        type:String
    },
    phone:{
      type:String
    }
});
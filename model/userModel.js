const mongoose=require('mongoose')


const userSchema= new mongoose.Schema({

    uname:{
        type:String,
        required:true,
        trim:true

    },

    email:{
        type:String,
        required:true,
        // trim:true

    },

    psw:{
        type:String,
        required:true,
    }

})

const users=new mongoose.model('users',userSchema)

module.exports=users
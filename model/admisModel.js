const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    adminName:{
        type:String,
        required:true
    },
    adminPsw:{
        type:String,
        required:true
    }
})

const admis = new mongoose.model("admis",adminSchema)

module.exports=admis
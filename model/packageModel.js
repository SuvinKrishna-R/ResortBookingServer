const mongoose=require('mongoose')


const packageSchema= new mongoose.Schema({

    addName:{
        type:String,
        required:true,
        trim:true

    },

    location:{
        type:String,
        required:true,
        // trim:true

    },

    price:{
        type:String,
        required:true,
    },

    
    

    profile:{
        type:String,
        required:true,
    }


})

const packages=new mongoose.model('packages',packageSchema)

module.exports=packages
const mongoose =require('mongoose')


const bookingSchema=new mongoose.Schema({

    resortId:{
        type:String,
        required:true,
        trim:true

    },
    resortName:{
        type:String,
        required:true,
        trim:true

    },
    rname:{
        type:String,
        required:true,
        trim:true

    },
    remail:{
        type:String,
        required:true,
        trim:true

    },
    rphno:{
        type:String,
        required:true,
        trim:true

    },
    checkIn:{
        type:String,
        required:true,
       

    },
    checkOut:{
        type:String,
        required:true,
        

    }


})

const bookingDatas=new mongoose.model('bookingDatas',bookingSchema)


module.exports=bookingDatas

const users=require('../model/userModel')
const packages=require('../model/packageModel')
const bookingDatas=require('../model/bookingModel')
const admis=require('../model/admisModel')

//logic for register
const userRegisterLogic=async(req,res)=>{

    const{uname,email,psw}=req.body

    if(!uname || !email || !psw){
        res.statue(400).json('All datas are required')
    }
    else{
        try{
            //user exist anoo alleyoon nokkan
        const user = await users.findOne({email,psw})
        if(user){
            res.status(400).json("user already exist")
        }else{
            var newUser=new users({
                uname,
                email,
                psw
            })
            await newUser.save()
            res.status(200).json(uname)
        }
            }

        catch{
            res.status(400).json('Connection Error')
        }

    }
}
 

//logic for login
const userLoginLogic=async(req,res)=>{
    const {psw,uname}=req.body
    if(!uname || !psw){
        res.status(400).json("All Datas are required")
    }
    else{
        const loginUserId=await users.findOne({psw,uname})
        if(loginUserId){
            res.status(200).json({uid:loginUserId._id})
        }else{
            res.status(400).json("user not present")
        }
    }

}

//logic for add packages
const addPackage=async(req,res)=>{
    const profile=req.file.filename


    const{addName,location,price}=req.body
    if(!addName || !location || !price  ){
        res.status(404).json("All inputs are required")

    }
    else{
        try{
        let prePackage=await packages.findOne({addName,location}) 
        if(prePackage){
            res.status(400).json('Package is already present')
        }
        else{
            
            let newPackage=new packages({
                addName,
                location,
                price,
                profile
            })
            await newPackage.save()
            res.status(200).json(addName)
        }
    }
    catch{
        res.status(400).json("connection error")
    }
    }

}

//get all added packages

const getAllPackages=async(req,res)=>{
    try {
      const data = await packages.find();
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json("No data found");
      }
    } catch (error) {
      res.status(400).json("connection error", error);
    }
  }


  //single card page

  const singlePage=async(req,res)=>{
    try{
        const{id}=req.params
        const data=await packages.findById({_id:id})
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(400).json('No Data Found')
        }
    }

    catch(error){
        res.status(400).json('connection Error',error)
    }
  }

  //logic for model box booking details
  const booking=async(req,res)=>{
    const {resortId,resortName,rname,remail,rphno,checkIn,checkOut}=req.body
    if(!rname || !remail || !rphno || !checkIn || !checkOut ){
        res.status(404).json("All inputs are required")

    }

    else{
        try{
        const bookUser=await bookingDatas.findOne({checkIn,resortName})
        if(bookUser){
            res.status(400).json("Already Booked")
        }
        else{
            let newBooking=new bookingDatas({
                resortId,
                resortName,
                rname,
                remail,
                rphno,
                checkIn,
                checkOut
            })
            await newBooking.save()
            res.status(200).json(rname)
        }
    }
    catch{
        res.status(400).json('connection error')
    }

    }
  }

  //logic for admin all booking
const allBooking=async(req,res)=>{
    try{
        const booking=await bookingDatas.find()
        if(booking){
            res.status(200).json(booking)
        }else{
            res.status(400).json("Not Present Data")
        }
    }catch{
        res.status(400).json("connection error")
    }
}
//searchbar
const searchResort=async(req,res)=>{
    const SearchKey=req.query.search

    const query={
        addName:{$regex:SearchKey,$options:"i"}
    }
    try{
        const Resort=await packages.find(query)
        res.status(200).json(Resort)
    }catch{
        res.status(400).json('connection error')
    }
}

//admin login

const adminLogin=async(req,res)=>{
    const {adminPsw,adminName}=req.body
    if(!adminPsw || !adminName){
        res.status(400).json("All Datas are required")
    }
    else{
        const admin=await admis.findOne({adminName,adminPsw})
        if(admin){
            res.status(200).json({aId:admin._id})
        }else{
            res.status(400).json("admin not present")
        }
    }

}

module.exports={userRegisterLogic,userLoginLogic,addPackage,getAllPackages,singlePage,booking,allBooking,searchResort,adminLogin}
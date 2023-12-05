const mongoose=require('mongoose')
mongoose.connect(process.env.base_url,{

    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('___mongo db atlas connected____');
}).catch(()=>{
    console.log("______connection error_______");
})
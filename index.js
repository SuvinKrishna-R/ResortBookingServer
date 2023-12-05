// import express
const express= require('express')
require('dotenv').config()
require('./connections/dbConnections')

const cors=require('cors')
const router=require('./routes/route.js')



//server creation
const server=express()


//use
server.use(express.json())
server.use(cors())
server.use(router)
server.use('/packageimage',express.static('./uploads'))


//port setup
const port=6002 || process.env.port
server.listen(port,()=>{
    console.log(`----resort server start at the port ${port}----`);
})






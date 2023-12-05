const express=require('express')
const logicPath=require('../controllers/logic')
const upload = require('../middleware/multerMiddleWare')
const router=express.Router()




router.post('/user/register',logicPath.userRegisterLogic)

router.post('/user/login',logicPath.userLoginLogic)

router.post('/admin/addPackage',upload.single("user_profile"),logicPath.addPackage)

router.get('/admin/get-packages',logicPath.getAllPackages)

//single page view
router.get('/user/singleview/:id',logicPath.singlePage)

// booking
router.post('/user/booking',logicPath.booking)

router.get('/admin/all-booking',logicPath.allBooking)

router.get('/user/search',logicPath.searchResort)

router.post('/admin/login',logicPath.adminLogin)

module.exports=router
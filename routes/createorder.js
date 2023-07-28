var express= require('express');

var createordercontroller=require('../controller/CreateOrder/createordercontroller')
var router= express.Router();

router.get('/',createordercontroller)

router.post('/',(req,res,next)=>{

   
    })

module.exports=router;
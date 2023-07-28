//const connection = require('../../Databse')
//const{config} =require('dotenv');

   

const addOrder=require('./addOrderToDatabase')
const sbAO=require('./supabaseAddOrder')


module.exports= (req,res,next)=>{



    /*
    - create order with dynamically created number, use Random class.
    - add to database

    */

    let orderdetails=req.query.details;
    let ordercost=req.query.cost;
   var ordernumber = Math.floor(Math.random() * 3000)
   //addOrder(ordernumber,orderdetails,ordercost).then(data=>console.log(data.rows));
   sbAO(ordernumber,orderdetails,ordercost);
   res.header("Access-Control-Allow-Origin", "*");
    res.json({"page":"createorder"});

    }
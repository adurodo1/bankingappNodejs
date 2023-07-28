const{config} =require('dotenv');
const connection = require('../../Databse')

config();

function addToDatabase(ordernumber,orderdetails,ordercost){
    return new Promise(function (resolve, reject) {
        //set up quert
        let insertquery;


        insertquery= process.env.INSERT_NEW_ORDER;
        insertquery=insertquery.replaceAll('ORDERID', ordernumber);
        insertquery=insertquery.replaceAll('ORDERD', orderdetails);
        insertquery=insertquery.replaceAll('\'ORDERC\'', ordercost);


        let selectquery= process.env.SELECT_NEW_ORDER;
        selectquery=selectquery.replaceAll('ORDERID', ordernumber);

        console.log(insertquery);
        console.log(selectquery);

        try{
            connection.then(async (connected)=>{
                result =  await connected.execute(insertquery,
                 [],
                 function(err, result) {
                     if (err) {
                       console.error(err.message);
                       return;
                     }

                connected.commit();
                     ///get query result back

                     connection.then(async (connected)=>{
                        result =  await connected.execute(selectquery,
                         [],
                         function(err, result) {
                             if (err) {
                               console.error(err.message);
                               return;
                             }
                             console.log(result);//value of the userid
                
                            console.log("result")
                            
                               resolve(result);
                              
                               
                              
                     
                               //create another execution for 
                          });
                         // connected.commit();
                         
                        
                        }).catch(e=>console.error(e.message));
                        ///
               
                      
                       
                      
             
                       //create another execution for 
                  });
                 // connected.commit();
                 
                
                }).catch(e=>console.log(e));

        }
        catch(err)
        {
            console.error(err.message)
        }
        
    });
   
        
}


module.exports=addToDatabase;
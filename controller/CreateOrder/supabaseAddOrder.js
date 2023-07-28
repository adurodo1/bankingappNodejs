const sb=require('../../supabaseClient');


async function addOrder(ordernumber,orderdetails,ordercost)
{
 /*    sb
  .from('orders')
  .select('*')
  .limit(5)
  .then((d)=>console.log(d))
  .catch((e)=>console.error(e)) */

  const { error } = await sb
  .from('orders')
  .insert({
  order_id:ordernumber,
  order_details:orderdetails,
  order_cost:ordercost })
  console.log("function called")
  console.error(error)
}

module.exports=addOrder;
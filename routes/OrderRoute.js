const express = require("express");
const router = express.Router()
const Order = require("../models/OrderModel")
const { v4: uuidv4 } = require('uuid');
const Razorpay = require('razorpay');

// const stripe = require("stripe")('sk_test_51Kg1e6SBHfJqR5b6hz2tkQK5khPSAl9pqQuDLjEiknbDwXAOmDvijlWYbcBCOpSCvPKq1alTNURjp2TZoZvkkweX00SU40q8pd');


router.post("/cod", async (req, res)=> {
  console.log("hi")
  const { subTotal, currentUser, cartItems } = req.body;

  const neworder = new Order({
    name : currentUser.name,
    email : currentUser.email ,
    userId : currentUser._id ,
    orderItems : cartItems , 
    orderAmount : subTotal + 50 + (subTotal*0.18),
    
    transactionId : uuidv4()
})

  try {
    const orderDetails = await neworder.save()
   
      res.send(orderDetails)
  } catch (error) {
      return res.status(400).send("something went wrong", error)
  }
})



router.post("/getuserorders", async(req, res) => {
  const {userid} = req.body
  try {
      const orders = await Order.find({userid : userid}).sort({_id : -1})
      res.send(orders)
  } catch (error) {
      return res.status(400).json({ message: 'Something went wrong' });
  }
});


router.get("/getallorders", async(req, res) => {

  try {
      const orders = await Order.find({})
      res.send(orders)
  } catch (error) {
      return res.status(400).json({ message: error});
  }

});

router.post("/deliverorder", async(req, res) => {

  const orderid = req.body.orderid
  try {
      const order = await Order.findOne({_id : orderid})
      order.isDelivered = true
      await order.save()
      res.send('Order Delivered Successfully')
  } catch (error) {

      return res.status(400).json({ message: error});
      
  }

});













router.post("/checkout", (req, res) => {

  const { subTotal, currentUser, cartItems } = req.body;
 
  try {
		const instance = new Razorpay({
      key_id: "rzp_test_RFYZgSyKxa3H3c", 
      key_secret: "6dN0t8hzxSWqYgI4yEbmlgjw" ,
		});

		const options = {
			amount: subTotal * 100,
			currency: "INR",
			
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
})
module.exports = router;


// const express = require('express');
// const router = express.Router()
// const { v4: uuidv4 } = require('uuid');
// const stripe = require("stripe")('sk_test_51Kg1e6SBHfJqR5b6hz2tkQK5khPSAl9pqQuDLjEiknbDwXAOmDvijlWYbcBCOpSCvPKq1alTNURjp2TZoZvkkweX00SU40q8pd');

// router.post('/placeorder', async (req, res) => {

//     const { token, subTotal, currentUser, cartItems } = req.body;

//     try {

//         const customer = await stripe.customers.create({
//                     email: token.email,
//                     source: token.id
//                 }) 



//         const session = await stripe.checkout.sessions.create({
//             line_items: [
//                 {
                   
//                     price_data: {
//                         currency: 'inr',
//                         product_data: {
//                             name: cartItems.name,
//                         },
//                         unit_amount: subTotal*100,
//                     },
//                     quantity: cartItems.quantity,
//                 },
//             ],
//             customer: customer.id,
//             mode: 'payment',
//             success_url: 'https://localhost3000.com',
//             cancel_url: 'https://example.com/cancel',
//         },
//         {
//                 idempotencyKey : uuidv4()
//               }
//         );
//         if(session){
//                 console.log("payment done")
//               }else {
//                 console.log("payment failed")
//               }
//     } catch (error) {
//         return res.status(400).json({ message: 'Something went wrong' + error});
//     }


// });

// module.exports = router;

const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")('sk_test_51Kg1e6SBHfJqR5b6hz2tkQK5khPSAl9pqQuDLjEiknbDwXAOmDvijlWYbcBCOpSCvPKq1alTNURjp2TZoZvkkweX00SU40q8pd');
const app = express();

const pizzaModel = require('./models/PizzaModel')
const Order = require("./models/OrderModel")


const pizzaRoute = require('./routes/PizzaRoute')

const UserRoute = require('./routes/UserRoute')
const OrderRoute = require('./routes/OrderRoute')

const db = require("./db.js")
app.use(express.json())


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}



// app.get ("/", (req, res) => {
//     res.send("server is running")
// })

app.use("/api/pizzas", pizzaRoute);

app.use("/api/users", UserRoute);

app.use("/api/orders", OrderRoute);




// app.post("/create-checkout-session", async (req, res) => {
//   console.log("hi")

//   const {subTotal, currentUser, cartItems } = req.body;

  

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types : ["card"],
//       mode: "payment",
//       line_items: req.body.cartItems.map(item => {
        
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: item.name,
//             },
//             unit_amount: subTotal,
//           },
//           quantity: item.quantity,
//         }
//       }),
//       success_url : "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cart",
//     })
//     res.send(session.url);
    // const paymentLink = await stripe.paymentLinks.create({
    //     line_items: req.body.cartItems.map(item => {
        
    //         return {
    //           price_data: {
    //             currency: "inr",
    //             product_data: {
    //               name: item.name,
    //             },
    //             unit_amount: subTotal,
    //           },
    //           quantity: item.quantity,
    //         }
    //       }),
    //     after_completion: {type: 'redirect', redirect: {url: 'https://localhost:3000'}},
    //   });

  
//   } catch (error) {
//     return res.status(400).json({ message: 'Something went wrong' + error});

//   }




// });

// app.get ("/getPizza", (req, res) => {
//     pizzaModel.find({}, (err, docs)=> {

//         if(err) throw err (
//             console.error(err)
//         )

//         else {
//             res.send(docs)
//         }
//     })
// })

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log (`Server is listening on ${PORT}`))
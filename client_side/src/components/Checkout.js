import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'

import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../action/OrderAction';
import StripeCheckOut from './StripeCheckOut';


// onClick={()=>{dispatch(placeOrder(subTotal))}}

const Checkout = ({ subTotal }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const orderstate = useSelector((state) => state.placeOrderReducer)
  const { loading, error, success } = orderstate

  const handleClick = (e) => {
    // e.preventDefault()

    dispatch(placeOrder(subTotal));

    // navigate("../order")
  }



  return (
    <div>


      {loading && (<Loading />)}
      {error && (<Error error='Something went wrong' />)}
      {success ? (<Success success='Your Order Placed Successfully' />) : (    <button type="button" class="btn btn-danger btn-block btn-lg"
                      data-mdb-ripple-color="dark" onClick={handleClick}>Place Order</button>)}






    </div>
  )
}

export default Checkout


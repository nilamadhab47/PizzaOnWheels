import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { adddToCart, deleteFromCart } from '../action/CartAction';


const StripeCheckOut = props => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
  return (
    <div>
        {props.data}
    </div>
  )
}

export default StripeCheckOut
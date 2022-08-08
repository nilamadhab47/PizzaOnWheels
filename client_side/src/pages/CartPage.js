import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector, useDispatch } from "react-redux"
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { adddToCart, deleteFromCart } from '../action/CartAction';
import Checkout from '../components/Checkout';
import "./CartPage.css"



const CartPage = () => {

  AOS.init()


  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems
  var subTotal = cartItems.reduce((acc, items) => acc + items.price, 0)
  const dispatch = useDispatch()
  return (
    // <div>
    //   <div className="row justify-content-center" >


    //     <div className="col-md-6 mb-5">
    //       <h1 style={{ fontSize: "40px" }}>CART</h1>
    //       {console.log(cartItems)}

    //       {cartItems.map(items => {
    //         return <div className="d-flex justify-content-around" key={items._id} data-aos="fade-right">
    //           <div className='text-left m-1 w-100' >
    //             <h4>{items.name} ({items.varient})</h4>
    //             <h5>Price : {items.quantity} * {items.prices[0][items.varient]} = Rs. {items.price}</h5>
    //             <h6 className="bold">Quantity :
    //               <FaMinus style={{cursor: 'pointer', margin:"0 5px"}} onClick={()=> dispatch(adddToCart(items, items.quantity-1, items.varient))}/>
    //               {items.quantity} 
    //              <FaPlus style={{cursor: 'pointer', margin:"0 5px"}} onClick={()=> dispatch(adddToCart(items, items.quantity+1, items.varient))}/>
    //               </h6>
    //             <p> </p>
    //             <hr/>
    //           </div>
    //           <div className="d-inline m-1">
    //             <img src={items.image} style={{height:'80px' , width:'80px'}} />
    //           </div>
    //           <div>
    //             <FaTrash style={{marginTop:" 3rem", alignItems: "center", color: "red"}} onClick={()=> dispatch(deleteFromCart(items))}/>
    //           </div>


    //         </div>
    //       })}

    //     </div>

    //     <div className="col-md-4" data-aos="fade-right">
    //     <h1 style={{ fontSize: "40px" }}>Sub Total Rs.{subTotal}</h1>
    //     <Checkout subTotal = {subTotal} />

    //     </div>

    //   </div>
    // </div>
    <section className="" style={{height:"100%" ,background: "rgb(86,60,238)",
      background: "linear-gradient(40deg, rgba(86,60,238,1) 0%, rgba(233,60,238,1) 100%)",marginTop: "-1rem" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px",     marginTop: "5rem" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                      </div>
                      <hr className="my-4" />
                      {cartItems.map(items => {
                        return <div className="row mb-4 d-flex justify-content-between align-items-center" data-aos="fade-right">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={items.image}
                              className="img-fluid rounded-3" alt="Cotton T-shirt" />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{items.name}</h6>
                            <h6 className="text-black mb-0">{items.varient}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"
                              onClick={() => dispatch(adddToCart(items, items.quantity - 1, items.varient))}>
                              <i className="fas fa-minus"></i>
                            </button>

                            <label name="quantity" id="form1" style={{ marginTop: "11px" }}>{items.quantity}</label>

                            <button className="btn btn-link px-2"
                              onClick={() => dispatch(adddToCart(items, items.quantity + 1, items.varient))}>
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{items.quantity} * {items.prices[0][items.varient]}= Rs. {items.price}</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <div>
                              <FaTrash style={{ marginTop: " 3rem", alignItems: "center", color: "red" }} onClick={() => dispatch(deleteFromCart(items))} />
                            </div>
                          </div>
                          <hr className="my-4" />
                        </div>

                      })}

                      <div className="pt-5 ">
                        <h6 className="mb-0"><a href="/" className="text-body float-start"><i
                          className="fas fa-long-arrow-alt-left me-2 "></i>Back to Menu</a></h6>
                      </div>
                    </div>
                  </div>
                 
                      <div class="col-md-4">
                        <div class="card mb-2" style={{border: "none", boxShadow: "none"}}>
                          <div class="card-header py-3">
                            <h5 class="mb-0 fw-bold">Summary</h5>
                          </div>
                          <div class="card-body">
                            <ul class="list-group list-group-flush">
                              <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>Rs. {subTotal}</span>
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping
                                <span>Rs 50.00</span>
                              </li>
                              <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                  <strong>Total amount</strong>
                                  <strong>
                                    <p class="mb-0">(including GST)</p>
                                  </strong>
                                </div>
                                <span><strong>{subTotal+ 50 + (subTotal*0.18)}</strong></span>
                              </li>
                            </ul>

                            <Checkout subTotal = {subTotal} />
                          </div>
                        </div>
                      </div>



                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>






  )
}

export default CartPage
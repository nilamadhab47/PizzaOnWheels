import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../action/OrderAction';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
import "./OrderPage.css"
import AOS from 'aos'
import 'aos/dist/aos.css';
import logo from "../images/Asset.png"
export default function Ordersscreen() {

    AOS.init()
    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {

        dispatch(getUserOrders())

    }, [])

    return (
        <div>
            <h2 style={{ fontSize: '35px', marginTop: "2rem", color: "antiquewhite" }}>My Orders</h2>
            <div className="row justify-content-center">
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {orders && orders.map(order => {
                    return <>
                        <div className="card" data-aos='fade-down' style={{width: "93%", marginBottom: "2rem"}}>
                            <div className="card-body">
                                <div className="container mb-5 mt-3">
                                    <div className="row d-flex align-items-baseline">
                                        <div className="col-md-9">
                                            <p style={{ color: "#7e8d9f", fontSize: "20px" }} className="float-start">Invoice <strong>ID: {order._id}</strong></p>
                                        </div>
                                        <div className="col-xl-3 float-end">
                                            <a className="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark"><i
                                                className="fas fa-print text-primary"></i> Print</a>
                                            <a className="btn btn-light text-capitalize" data-mdb-ripple-color="dark"><i
                                                className="far fa-file-pdf text-danger"></i> Export</a>
                                        </div>
                                        <hr />
                                    </div>

                                    <div className="container">
                                        <div className="col-md-12">
                                            <div className="text-center">
                                            <img src={logo} alt="logo" style={{height: "70px", transform: "scaleX(-1)"}} />
                                                <p className="pt-0">PIZZA ON WHEELS</p>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col-xl-8">
                                                <ul class="list-unstyled float-start" style={{marginTop: "51px"}}>
                                                    <li class="text-muted ">To: <span style={{color:"#5d9fc5"}}>{order.name}</span></li>
                                                    <li class="text-muted ">email <span style={{color:"#5d9fc5"}}>{order.email}</span></li>
                                                    <li class="text-muted ">UserID <span style={{color:"#5d9fc5"}}>{order.userId}</span></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-4">
                                                <p className="text-muted fw-bolder" style={{ fontSize: "24px" }}>Transaction </p>
                                                <ul className="list-unstyled">
                                                    <li className="text-muted"><i className="fas fa-circle" style={{ color: "#84B0CA " }}></i> <span
                                                        className="fw-bold">ID:</span>{order.transactionId}</li>
                                                    <li className="text-muted"><i className="fas fa-circle" style={{ color: "#84B0CA " }}></i> <span
                                                        className="fw-bold">Creation Date: </span>{order.createdAt.substring(0, 10)}</li>
                                                    <li className="text-muted"><i className="fas fa-circle" style={{ color: "#84B0CA " }}></i> <span
                                                        className="me-1 fw-bold">Delivery-Status:</span><span className="badge bg-warning text-black fw-bold">
                                                            {order.isDelivered.toString()}</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row my-2 mx-1 justify-content-center">
                                            <table className="table table-striped table-borderless">
                                                <thead style={{ backgroundColor: "#84B0CA " }} className="text-white">
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col">Qty</th>
                                                        <th scope="col">Size</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {order.orderItems.map(item => {
                                                        return <tr>
                                                            <th scope="row">&#8902;</th>
                                                            <td>{item.name}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>{item.varient}</td>
                                                            <td>{item.price}</td>
                                                        </tr>
                                                    })}
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-8">
                                                <p className="ms-3 float-start">Add additional notes and payment information</p>

                                            </div>
                                            <div className="col-xl-3">

                                                <p className="text-black float-start"><span className="text-black me-1">Total Amount(including GST)</span><span
                                                    style={{ fontSize: "22px" }}>Rs.{order.orderAmount}</span></p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-xl-10">
                                                <p className="float-start" style={{ fontSize: "29px", color: "red" }}>Thank you for your purchase !!</p>
                                            </div>
                                            <div className="col-xl-2">
                                            <p className="float-end">Paid through Cash On Delivery</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <br className="mb-4" />
                    </>

                    // <div className="col-md-8 m-2 p-1" data-aos='fade-down'  style={{backgroundColor:'red' , color:'white'}}>

                    //         <div className="flex-container">
                    //             <div className='text-left w-100 m-1'>
                    //                 <h2 style={{fontSize:'25px'}}>Items</h2>
                    //                 <hr/>
                    //                 {order.orderItems.map(item=>{
                    //                     return <div>
                    //                         <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                    //                     </div>
                    //                 })}
                    //             </div>

                    //             <div className='text-left w-100 m-1'>
                    //             <h2 style={{fontSize:'25px'}}>Order Info</h2>
                    //             <hr/>
                    //             <p>Order Amount : {order.orderAmount}</p>
                    //             <p>Date : {order.createdAt.substring(0,10)}</p>
                    //             <p>Transaction Id : {order.transactionId}</p>
                    //             <p>Delivery Status: {order.isDelivered.toString()}</p>
                    //             <p>Order Id : {order._id}</p>
                    //             </div>
                    //         </div>

                    // </div>
                })}

            </div>
        </div>
    )
}

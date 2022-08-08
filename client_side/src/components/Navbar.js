import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from '../action/UserAction';
import { FaShoppingCart } from 'react-icons/fa';
import logo from "../images/Asset.png"
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.css"


const Navbar = () => {

  const cartState = useSelector(state => state.cartReducer)
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch()


  return (
    <div>

      <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container"><a href="/" class="navbar-brand text-uppercase font-weight-bold">
          <img src={logo} alt="logo" className='logo' style={{height: "30px"}}/>
          Pizza On Wheels
          </a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              {currentUser ? (

                <li class="dropdown"><a href="#"><span>{currentUser.name.toUpperCase()}</span> <i class="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="/order">Order Details</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="#" onClick={()=>{dispatch(logoutUser())}}>Logout</a></li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
              <li class="nav-item"><a href="/cart" class="nav-link text-uppercase font-weight-bold">
              <FaShoppingCart/> ({cartState.cartItems.length})
                </a></li>
            </ul>
          </div>
        </div>
      </nav>




      {/* <nav className="navbar navbar-expand-lg shadow-lg p-2 mb-3 navbar-dark ">
        <a className="navbar-brand" href="/">
          PIZZA ON WHEELS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i style={{ color: 'white' }} className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
               {currentUser.name}
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
                <Dropdown.Item href="/order">order</Dropdown.Item>
                <Dropdown.Item href="#/action-2"onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
              <FaShoppingCart/> ({cartState.cartItems.length})
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
}

export default Navbar
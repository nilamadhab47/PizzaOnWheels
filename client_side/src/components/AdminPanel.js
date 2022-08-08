import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Routes, Route ,Link} from "react-router-dom"
import { logoutUser } from '../action/UserAction';
import "./Admin.css"
import Addpizza from './Addpizza';
import Editpizza from './Editpizza';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Userlist from './Userlist';

const AdminPanel = () => {
    const cartState = useSelector(state => state.cartReducer)
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    useEffect(() => {
     if(!currentUser.isAdmin) {

        window.location.href("/")
     }
    
      
    }, [])
    


  return (
    <div className="admin">
      <div className="row justify-content-center p-3 mt-6" style={{color: "white"}}>
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px", marginTop: "6rem", color: "white"}}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to='userslist' style={{color: 'white'}}>Users List</Link>
            </li>
            <li>
            <Link to={'/admin/pizzaslist'} style={{color: 'white'}}>Pizzas List</Link>
            </li>
            <li>
            <Link to={'/admin/addpizza'} style={{color: 'white'}}>Add Pizza</Link>
            </li>
            <li>
            <Link to={'/admin/orderslist'} style={{color: 'white'}}>Orders List</Link>
            </li>

            </ul>


          <Routes>
          <Route>
              <Route path="userslist" element={<Userlist/>} />
              <Route path="orderslist" element={<Orderslist/>} />
              <Route path="pizzaslist" element={<Pizzaslist/>} />
              <Route path="addpizza" element={<Addpizza/>} />
              <Route path="editpizza/:pizzaid" element={<Editpizza/>} />
              </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
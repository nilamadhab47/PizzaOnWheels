import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizza, deletePizza } from "../action/PizzaAction"

import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pizzaslist = () => {
    const dispatch = useDispatch()

    const pizzasState = useSelector(state => state.getAllPizzaReducer)
  
    const { pizzas, loading, error } = pizzasState

    useEffect(() => {

        dispatch(getAllPizza())
    
      }, [])
    
  
  return (
    <div>
        <h2>PizzaList</h2>
        {loading && (<Loading />)}
        {error && (<Error error='somenthing went wrong'/>)}
        <table className="table table-bordered table-hover">
            <thead className='thead-dark'>
                <tr table-dark>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Update/Delete</th>
                </tr>
            </thead>
        
        
        <tbody>
       
          {pizzas && pizzas.map(pizza =>{
            return <tr className="table-dark">
                <td className="">{pizza.name}</td>
                <td>
                    Small: {pizza.prices[0]["small"]} <br />
                    Medium: {pizza.prices[0]["medium"]} <br />
                    Large: {pizza.prices[0]["large"]} <br />
                </td>
                <td>{pizza.category}</td>
                <td>
                    <FaTrash style={{marginRight: "4px", textAlign: "center"}}  onClick={()=>dispatch(deletePizza(pizza._id))}/>
                    <Link to={`/admin/editpizza/${pizza._id}`}><FaEdit /></Link>
                </td>
            </tr>
            
            })}

        </tbody>
        </table>
        


    </div>
  )
}

export default Pizzaslist
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizza } from "../action/PizzaAction"
import PizzaPage from '../components/PizzaPage'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
import Header from './Header';

const HomePage = () => {
  const dispatch = useDispatch()

  const pizzasState = useSelector(state => state.getAllPizzaReducer)

  const { pizzas, loading, error } = pizzasState


  useEffect(() => {

    dispatch(getAllPizza())

  }, [])





  return (
    <div>
      <Header/>
      <Filter/>
    <MDBRow className='row-cols-1 row-cols-md-3 gx-3 gy-4 mt-4' style={{ marginLeft: "6rem" }} id="menu">

      {loading ?  (<Loading/>) : error ? ( <Error error='Something went wrong'/>) : (
        pizzas.map(pizza => {
          return <MDBCol key={pizza._id}>
            <PizzaPage pizza={pizza} />
          </MDBCol>
        })

      )}



    </MDBRow>
    </div>
  )
}

export default HomePage
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { adddToCart } from '../action/CartAction';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./Pizzas.css"
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Filter from './Filter';



const Pizzas = ({ pizza }) => {

  AOS.init()



  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const isOpenHandler = ()=> {setShow(true)};
  const closeHandler = ()=> {setShow(false)};

  const dispatch = useDispatch()

  const addToCart = () => {

    dispatch(adddToCart(pizza , quantity , varient))
    


  }




  return (
    <>
   
    <div>
      
    <MDBCard className='p-3 m-3 cards' data-aos="zoom-in-up">
      <MDBCardImage
        src={pizza.image}
        alt='pizza'
        position='top'
        className='img-fluid cards-img'
        onClick={isOpenHandler}
        
      />
      <MDBCardBody className='p-3'>
        <MDBCardTitle className='mb-3 mt-3'>{pizza.name}</MDBCardTitle>
        <MDBCardText>
          <div className='d-flex justify-content-around'>
            <div className="item1">
              <select value={varient} onChange={(e)=> {setVarient(e.target.value)}}>
                <p>Sizes</p>
                {pizza.varients.map((varient) => {
                  return <option value={varient} style={{textTransform : 'capitalize'}}>{varient}</option>
                })}
              
              
              </select>
              
            </div>
            <div className="item2">
              <select value={quantity} onChange={(e)=> {setQuantity(e.target.value)}}>
                <p>Quantity</p>
                {[...Array(10).keys()].map((x , index) => {
                  return <option value={index+1}>{index+1}</option>
                })}
              </select>
              
            </div>
          </div>

        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
      <div className='d-flex justify-content-around'>
        <div className="foot__item--1">
          <p>Price: {pizza.prices[0][varient] * quantity}</p>
        </div>
        <div className="foot__item--2">
          <button className='btn btn-danger mx-2' onClick={addToCart}>
            Add to Cart
            </button>

        </div>
      </div>
        
      </MDBCardFooter>
    </MDBCard>
    <Modal show={show} onHide={closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={pizza.image} alt="" className='img-fluid' style={{height: "400px"}}/>
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    </>

  )
}

export default Pizzas
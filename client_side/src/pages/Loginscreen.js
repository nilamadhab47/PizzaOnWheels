
import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { loginUser } from "../action/UserAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import img from "../images/img1.jpg"
import logo from "../images/Asset.png"


export default function Loginscreen() {
  

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading , error} = loginstate
    const dispatch = useDispatch()

    useEffect(() => {

          if(localStorage.getItem('currentUser'))
          {
              window.location.href='/'
          }
        
    }, [])

    function login(){
        const user={email , password}
        dispatch(loginUser(user))
    }
    
    return (
      <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{borderRadius: "1rem"}}>
        {loading && (<Loading/>)} 
        {error && (<Error error='Invalid Credentials'/>)}
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={img}
                    alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem",height: "-webkit-fill-available"}} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
    
                    <form>
    
                      <div className="d-flex align-items-center mb-3 pb-1">
                      <img src={logo} alt="logo" className='logo' style={{height: "30px"}}/>
                        <span className="h1 fw-bold mb-0">Pizza on Wheels</span>
                      </div>
    
                      <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
    
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" value={email}  onChange={(e)=> setemail(e.target.value)}/>
                        <label className="form-label" for="form2Example17">Email address</label>
                      </div>
    
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" value={password}  onChange={(e)=> setpassword(e.target.value)}/>
                        <label className="form-label" for="form2Example27">Password</label>
                      </div>
    
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={login}>Login</button>
                      </div>
    
                      {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                      <p className="mb-5 pb-lg-2"  style={{color: "#393f81"}}>Don't have an account? <a href="/registration"
                          style={{color: "#393f81"}}>Register here</a></p>
                      <a href="#!" className="small text-muted">Terms of use.</a>
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>
    
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

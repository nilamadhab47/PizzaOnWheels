import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from '../action/UserAction'
import { useNavigate } from 'react-router-dom';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'


const Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerstate

    // const handleSubmit = event => {
    //     event.preventDefault();
    
    //     // 👇️ redirect to /contacts
    //     navigate('/');
    //   };

    const registerHandler = event => {
        event.preventDefault();
    
        // 👇️ redirect to /contacts
        navigate('/');


        if (password !== cpassword) {
            alert("Please enter correct password")
        } else {
            const user = {
                name,
                email,
                password,
            }
            console.log(user)
            dispatch(registerUser(user))

        }

    }




    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">

                        {loading && (<Loading />)}
                        {success && (<Success success='User Registered Successfully' />)}
                        {error && (<Error error='Email already registred' />)}




                        
                        <div className="card text-black mt-3" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" >

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                                    <label className="form-label" for="form3Example1c">Your Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    <label className="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                    <label className="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
                                                    <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-start mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                             </div>

                                            <div className="d-flex justify-content-center mx-4 mb-4 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" onClick={registerHandler}>Register</button>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-4 mb-lg-4">
                                               <a style={{color:'black', textDecoration: "none"}} href="/login" className="mt-2">Login &rarr;</a>
                                            </div>

                                           

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

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

export default Registration
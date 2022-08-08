import React from 'react'
import "./Header.css"
import slide1 from "../slide/slide-1.jpg"
import slide2 from "../slide/slide-2.jpg"
import slide3 from "../slide/slide-3.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import logo from "../images/Asset.png"

 
const Header = () => {
    
   
  return (
    <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

          <div className="carousel-item active" style={{backgroundImage: `url(${img3})`, backgroundSize: "cover"}}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown"><span>Cheesilicious</span>Pizza <img src={logo} alt="logo" style={{height: "70px", transform: "scaleX(-1)"}} /></h2>
                <h2 className="animate__animated animate__fadeInUp" style={{color:"#ffb03b"}}><span style={{color:"#fff"}}>Only on &nbsp;</span>PIZZA ON WHEELS</h2>
                <div>
                  <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                  <a href="/registration" className="btn-book animate__animated animate__fadeInUp scrollto">Register Now</a>
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

export default Header
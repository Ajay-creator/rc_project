import React from "react";
import "./Home.css";
import robo1 from "./images/robo1.jpeg";
import robo2 from "./images/ros.jpg";
import robo3 from "./images/projects.jpeg";
import about from "./images/about.jpeg";
import gallery from "./images/gallery.jpeg";
import Footer from "./Footer";
function Home() {
  return (
    <div className="home">
      <div className="slide_show">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={robo1} alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={robo2} alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={robo3} alt="" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img className="card-img-top" src={robo3} alt="" />
          <div className="card-body">
            <h5 className="card-title">Projects</h5>
            <p className="card-text">Have a look at our works.</p>
            <a href="https://google.com" className="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={about} alt="" />
          <div className="card-body">
            <h5 className="card-title">About Us</h5>
            <p className="card-text">Get to know about us</p>
            <a href="https://google.com" className="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={gallery} alt="" />
          <div className="card-body">
            <h5 className="card-title">Gallery</h5>
            <p className="card-text">Looks at out mile stones</p>
            <a href="https://google.com" className="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

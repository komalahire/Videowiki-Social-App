import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Carousel from 'nuka-carousel';
import Pick1 from "../components/1.jpg";
import Pick2 from "../components/4.jpg";
import Pick3 from "../components/2.jpeg";
import Pick4 from "../components/2.jpg";
import Pick5 from "../components/5.jpeg";

import Carousel from "react-material-ui-carousel";
// import { Carousel, CarouselSlide } from 'material-ui-carousel'
import Navgurukul_logo from "../components/navgurukul.png";
class NavBar extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Navbar
            expand="lg"
            variant="light"
            style={{ backgroundColor: "#3578E5" }}
          >
            {/* <h1>Navgurukul</h1> */}
            <img src={Navgurukul_logo} style={{ height: "200px" }} alt="img" />

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login">
                    <Button
                      // variant="primary"
                      style={{ height: "40px", width: "90px" }}
                    >
                      Login
                    </Button>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup">
                    {" "}
                    <Button
                      variant="primary"
                      style={{ height: "40px", width: "90px" }}
                    >
                      Signup
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar>
        </div>
        <Carousel>
          <div>
            {" "}
            <img
              src={Pick1}
              style={{
                height: "700px",
                width: "50%",
                marginLeft: "80px",
                marginTop: "40px"
              }}
              alt="t"
            />
            <span style={{ marginLeft: "40px", fontSize: "20px",color:"gray" }}>
              An Alternative to Colleges to Challenge Inequality in Higher
              Education
            </span>
          </div>
          <div>
            <img
              src={Pick4}
              style={{
                height: "700px",
                width: "50%",
                marginLeft: "80px",
                marginTop: "40px"
              }}
              alt="t"
            />
            <span style={{ marginLeft: "40px",fontSize: "20px",color:"gray" }}>
              One Year Software Engineering Skilling, Guaranteed Jobs
            </span>
          </div>
          <div>
          <img
            src={Pick2}
            style={{
              height: "700px",
              width: "50%",
              marginLeft: "80px",
              marginTop: "40px"
            }}
            alt="t"
          />
          <span   style={{ marginLeft: "40px",fontSize: "20px",color:"gray" }}>Coders, Critical Thinkers, Changemakers</span>
          </div>
          <div>
          <img
            src={Pick3}
            style={{
              height: "700px",
              width: "50%",
              marginLeft: "80px",
              marginTop: "40px"
            }}
            alt="t"
          />
           <span  style={{ marginLeft: "40px",fontSize: "20px",color:"gray" }}> React JS Developers</span>
           </div>
           <div>
          <img
            src={Pick5}
            style={{
              height: "700px",
              width: "50%",
              marginLeft: "80px",
              marginTop: "40px"
            }}
            alt="t"
          />
          <span  style={{ marginLeft: "40px",fontSize: "20px",color:"gray" }}>Got oppertutinuty for exporlore ourselve</span>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default NavBar;

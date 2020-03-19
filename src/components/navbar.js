import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pick1 from "../components/Images/1.jpg";
import Pick2 from "../components/Images/4.jpg";
import Pick3 from "../components/Images/2.jpeg";
import Pick4 from "../components/Images/2.jpg";
import Pick5 from "../components/Images/5.jpeg";
import Pick6 from "../components/Images/6.jpeg";
import Carousel from "react-material-ui-carousel";
import Navgurukul_logo from "../components/navgurukul.png";
import Login from "../pages/login";

class NavBar extends Component {
 

  render() {
    return (
      <div>
        <div>
          <Navbar
            expand="lg"
            variant="light"
            style={{ backgroundColor: "#3578E5" }}
          >
            <img src={Navgurukul_logo} style={{ height: "200px" }} alt="img" />

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                
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

        <div style={{ display: "flex", marginRight: "10%" }}>
          <Carousel>
            <div>
              <img
                src={Pick1}
                style={{
                  height: "700px",
                  width: "65%",
                  marginLeft: "80px",
                  marginTop: "40px"
                }}
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pick6}
                style={{
                  height: "700px",
                  width: "65%",
                  marginLeft: "80px",
                  marginTop: "40px"
                }}
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pick4}
                style={{
                  height: "700px",
                  width: "65%",
                  marginLeft: "80px",
                  marginTop: "40px"
                }}
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pick2}
                style={{
                  height: "700px",
                  width: "65%",
                  marginLeft: "80px",
                  marginTop: "40px"
                }}
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pick3}
                style={{
                  height: "700px",
                  width: "65%",
                  marginLeft: "80px",
                  marginTop: "40px"
                }}
                alt="t"
              />
            </div>
            <div>
              <img
                src={Pick5}
                style={{
                  height: "700px",
                  width: "65%",
                  marginLeft: "80px",
                  marginTop: "40px"
                }}
                alt="t"
              />
            </div>
          </Carousel>

          <span style={{ marginTop: "125px" }}>
            <Login />
          </span>
        </div>
      </div>
    );
  }
}
export default NavBar;

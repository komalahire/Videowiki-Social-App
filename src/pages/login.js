import React, { Component } from "react";
import axios from "axios";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Navbar from "../components/navbar";
import Navgurukul_logo from "../components/navgurukul.png";
var validEmailRe = RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:s@\"]{2,})$/i
);
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: true
    , errors: {
     
      email: "",
      password: ""
    }
  }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  validateUsername = userName => {
    return userName && userName.length >= 5;
  };
  onChange(e) {
    const { name, value } = e.target;
    let errors = this.state.errors;
    const newErros = { ...errors };
    switch (name) {
      case "Username":
        newErros.Username = this.validateUsername(value)
          ? ""
          : "Full Name must be 5 characters long!";
        break;
      case "email":
        newErros.email = validEmailRe.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        newErros.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({
      errors: newErros,
      [name]: value
    });
  }; 

  onSubmit(e) {
    e.preventDefault();
    axios
      .get(
        "http://localhost:8000/login",
        {
          params: {
            email: this.state.email,
            password: this.state.password
          }
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(res => {
        // console.log(res)
        localStorage.setItem("token", res.data);
        const token = localStorage.getItem("token");

        // axios.post('http://localhost:8000/verify', {id: res.data.user['id']})

        axios
          .get("http://localhost:8000/verify", { params: { token: token } })
          .then(respo => {
            console.log("ty7tiu");
            if (respo.data === true) {
              this.props.history.push("/home");
            } else {
              this.props.history.push("/login");
            }
          });
        // console.log(a)
        this.setState({
          loading: false
        });
        // this.props.history.push('/home')
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        });
      });
  }

  render() {
    const { email,  password } = this.state;
    const isEnabled =
    validEmailRe.test(email) && password.length > 8  ;

    return (
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
                  variant="primary"
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
        <form noValidate onSubmit={this.onSubmit}>
          <div className="auth-wrapper" style={{ marginTop: "10%" }}>
            <div className="auth-inner">
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div style={{ color: "red" }}>{this.state.errors.email}</div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div style={{ color: "red" }}>{this.state.errors.password}</div>
                            <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={!isEnabled}
                style={{ height: "40px", width: "90px" }}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

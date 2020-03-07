import React, { Component } from "react";
import { Grid, Paper, Button, Input } from "@material-ui/core";
import "./post.css";
import { Navbar } from "react-bootstrap";
import Navgurukul_logo from "../components/navgurukul.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import User from "./post";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Image from "./image";
// import zIndex from "@material-ui/core/styles/zIndex";

class Uploadimage extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      text: "",
      posts: "",
      user: "",
      username: ""
    };
  }

  logout() {
    localStorage.clear();
  }

  updateInput(e) {
    e.preventDefault();
  }
  textPost = e => {
    // window.location.reload(true);
    this.setState({ text: e.target.value });
  };

  componentDidMount() {
    this.m();
    this.d();
    this.n();
  }
  uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "venu18");
    this.setState({
      loading: true
    });

    const a = await axios.get("http://localhost:8000/get_post");

    this.setState({
      posts: a.data
    });

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/coder-202/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      loading: false
    });

    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:8000/image", {
        params: {
          imageUrl: file.secure_url,
          token: token,
          Text: this.state.text
        }
      })

      .then(res => {
        //  console.log(res);
      })
      .catch(err => {
        //  console.log(err);
      });

    const m = await axios.get("http://localhost:8000/get_post");
    this.setState({
      posts: m.data
    });
  //   const s = await axios.get("http://localhost:8000/user_name", {
  //     params: {
  //       token: token
  //     }
  //   });
  //   this.setState({ username: s.data });
  //   console.log(s.data);
  // };
  // n = async e => {
  // const s = await axios.get("http://localhost:8000/user_name", {
  //     params: {
  //       token: token
  //     }
  //   });
  //   this.setState({ username: s.data });
  //   console.log(s.data);
  // };
}
n = async e => {
  const token = localStorage.getItem("token");
  const s = await axios.get("http://localhost:8000/user_name", {
      params: {
        token: token
      }
    });
    this.setState({ username: s.data });
    console.log(s.data);
  };

  d = async e => {
    const c = await axios.get("http://localhost:8000/get_post");

    this.setState({
      posts: c.data
    });
  };

  m = async e => {
    const b = await axios.get("http://localhost:8000/get_user");

    this.setState({
      user: b.data
    });
    this.intervalID = setTimeout(this.c, 5000);
  };

  // componentDidMount(){
  //   this.m()
  //   this.d()
  // }
  // componentDidMount(){
  //   this.uploadImage()
  // }

  render() {
    return (
      <div>
        <Navbar
          expand="lg"
          variant="light"
          style={{
            backgroundColor: "#3578E5",
            position: "fixed",
            zIndex: "10000"
          }}
        >
          <img src={Navgurukul_logo} style={{ height: "200px" }} alt="img" />

          <div className="container" style={{ width: "10px" }}>
            <Tooltip title="Profile" arrow style={{ fontSize: "90px" }}>
              <Link to="/profile">
                <AccountCircleIcon />
              </Link>
            </Tooltip>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <Button
                  onClick={this.logout}
                  variant="contained"
                  color="primary"
                  style={{ height: "40px", width: "90px" }}
                >
                  Logout
                </Button>{" "}
              </Link>
            </li>
          </ul>
        </Navbar>
        <div class="a" style={{ paddingTop: "5%" }}>
          <Grid spacing={16}>
            <Grid item sm={8} xs={12}>
              <Paper className="homepaper">
                <h3 style={{ padding: "10px" }}>Create post</h3>
                <form onSubmit={this.uploadImages}>
                  <TextField
                    fullWidth
                    placeholder="write here caption"
                    style={{ padding: "10px" }}
                    name="text"
                    // onBlur={() => this.props.actions.updateInput(this.state.text)}
                    value={this.state.text}
                    onChange={this.textPost}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: "10px", marginBottom: "10px" }}
                  >
                    <label
                      htmlFor="file"
                      style={{ fontSize: "20px", color: "white" }}
                    >
                      <i
                        class="far fa-file-image"
                        style={{ color: "pink" }}
                      ></i>
                      <span style={{ marginLeft: "10px" }}>Photo/Videos</span>
                    </label>
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: "50%", fontSize: "20px" }}
                    // onClick={this.uploadImage}
                  >
                    Post
                  </Button>

                  <Input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={this.uploadImage}
                  />
                </form>
              </Paper>

              <div style={{ marginLeft: "50%" }}>
                <br />
              </div>
            </Grid>
          </Grid>
        </div>
        { this.state.username !=="" && this.state.user !== "" && <User usernameses={this.state.username} users={this.state.user} />
        }
        {this.state.posts !== "" && <Image post={this.state.posts} />}
        
        {/* {this.state.username !=="" && <User usernames={this.state.username}/>}   */}
      </div>
    );
  }
}

export default Uploadimage;

import React, { Component } from "react";
import { Grid, Paper, IconButton, Button, Input } from "@material-ui/core";
import { Navbar } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class Uploadimage extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      text: ""
    };
  console.log(this.state.text)
  }

  textPost = (e) => {
    const { name, value } = e.target;
    // console.log([name], value, "Pralhad")
    this.setState({ text: e.target.value });
  };
  
  uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "komal2");
    this.setState({
      loading: true
    });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/navgurukuls/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      loading: false
      // text:e.target.value
    });
    console.log(file.secure_url);
    // this.setState({
    //   loading: false
    // });
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .post("http://localhost:8000/image", {
        params: {
          imageUrl: file.secure_url,
          token: token,
          Text: this.state.text
        }
      })

      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navbar
          expand="lg"
          variant="light"
          style={{ backgroundColor: "#3578E5" }}
        >
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <span>Home</span>
          <div className="container" style={{ width: "10px" }}>
            <IconButton color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton color="inherit">
              <AddIcon />
            </IconButton>
            <IconButton color="inherit">
              <Link to="/profile">
                <AccountCircleIcon />
              </Link>
            </IconButton>
          </div>
        </Navbar>
        <Grid container spacing={10}>
          <Grid item sm={8} xs={12}>
            <Paper className="homepaper">
              <h3 style={{ padding: "10px" }}>Create post</h3>
                <TextField
                  fullWidth
                  label="Enter text filed"
                  name="text"
                  value={this.state.text}
                  onChange={this.textPost}
                />
                <Button variant="contained" color="primary">
                  <label htmlFor="file" style={{ fontSize: "20px" }}>
                    Photo/Videos
                  </label>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "40%", fontSize: "20px" }}
                >
                  Post
                </Button>

                <Input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={this.uploadImage}
                />
            </Paper>
            <div style={{ marginLeft: "50%" }}>
              <br />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Uploadimage;

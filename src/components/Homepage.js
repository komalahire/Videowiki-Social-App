import React, { Component } from "react";
import { Grid, Paper, IconButton, Button } from "@material-ui/core";
import { Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
// import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// import Profile from './Profile';
import Card from "@material-ui/core/Card";
import ReactDOM from "react-dom";
// import { withStyles } from '@material-ui/core/styles';

class Uploadimage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // file: '',
      images: [],
      people: []
    };

    // this.fileReader = new FileReader();
  }
  handleClick = () => {
    this.setState({
      people: this.state.people.concat(this.nameTextInput.value)
    });
  };
  _handleSubmit = e => {
    e.preventDefault();
  };
  setImages = e => {
    // e.preventDefault();
    const imageFiles = e.target.files;

    const filesLength = imageFiles.length;

    for (var i = 0; i < filesLength; i++) {
      let reader = new FileReader();

      let file = imageFiles[i];

      reader.onloadend = () => {
        this.setState({ images: this.state.images.concat(reader.result) });
      };

      reader.readAsDataURL(file);
    }
  };
  componentDidUpdate() {
    this.nameTextInput.value = "";
    ReactDOM.findDOMNode(this.nameTextInput).focus();
  }
  render() {
    let { images } = this.state;
    let names = this.state.people.map(name => {
      return <h1>{name}</h1>;
    });

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
                {" "}
                <AccountCircleIcon />
              </Link>
            </IconButton>
          </div>
        </Navbar>
        <Grid container spacing={16}>
          <Grid item sm={8} xs={12}>
            {/* <h3 style={{marginLeft:'200px'}}>Create post</h3> */}
            <Paper className="homepaper">
              <h3 style={{ padding: "10px" }}>Create post</h3>

              <form onSubmit={this._handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a new name"
                  ref={ref => (this.nameTextInput = ref)}
                  className="form-control"
                />

                <Button variant="contained" color="primary">
                  {" "}
                  <label for="file" style={{ fontSize: "20px" }}>
                    Photo/Videos
                  </label>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "40%", fontSize: "20px" }}
                  onClick={this.handleClick}
                >
                  Post
                </Button>

                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={this.setImages}
                />
              </form>
            </Paper>
            <div style={{ marginLeft: "50%" }}>
              {/* <Card style={{margin:"10px",}}> */}
              {images.map(item => (
                <img src={item} style={{ marginTop: "20%", width: "50%" }} />
              ))}

              <div>{names}</div>
              <br />
              {/* </Card> */}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Uploadimage;

import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './post.css'
import axios from "axios";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


const styles =  theme => ({
  inlinebox:{
   
     float:"right",
    marginTop:"-16%",
     
    
    
    
  },
  root: {
    width: '100%',
    maxWidth: 160,
    backgroundColor: theme.palette.background.paper,
   
  },
 
});


  

 class FolderList extends Component {
   
   
    
  // const classes = useStyles();
render(){
  const {classes} = this.props;
  const {users, usernameses}=this.props
  console.log(usernameses)
  
   
  return (
<div className={classes.inlinebox}> 

 <AccountCircleIcon/> 

    { usernameses.map(postes=>(<span>{postes.username}</span>  
       ))}  
      
       {users.map(posts=>(<box ><List className={classes.root}>
      <ListItem >
        
        <ListItemText primary={posts.username} />
        </ListItem>
      
    </List></box>
     
   
    ))}
    </div>
  );
      }
  
}
export default withStyles(styles)(FolderList)
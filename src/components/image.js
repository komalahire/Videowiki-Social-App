import React from "react";

import { blue } from '@material-ui/core/colors';
// import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader';
// import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
// import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 755,
      marginTop:20,
      marginLeft:490,
       
   
        
    },
   
    avatar: {
       
        color:blue[500],
        textTransform: 'capitalize',
        
      },
    media: {
        width:755,
       

        
   
      },
}))
function Image(props){
    const classes = useStyles();
   const {post} = props;
  //  console.log(post)
      
    return (
      <div class="inline">
         {post.map(captions=>(<Card className={classes.root} display="inline">
            <CardHeader className={classes.avatar}
        
        title={captions.Username}
        
      />
      <CardHeader title={captions.caption}/>
      <CardContent>
      < img src={captions.post_url} className={classes.media} alt="twinkle"/>
      </CardContent>
      {/* <Grid item xs={4}>
      <DeleteRoundedIcon/>
      </Grid> */}
      </Card>
      ))}
     </div>
    )
        
}

export default Image
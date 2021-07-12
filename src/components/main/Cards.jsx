/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "30px",
  },
  btnLeft: {
    justifyContent: "flex-start",
  },
  btnRight: {
    marginLeft: "auto!important",
  },
});

function Cards({ title, img, alt, text }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <CardMedia component="img" alt={alt} height="400" image={img} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.btnLeft}>
          <IconButton aria-label="add to favorites">
            <StarTwoToneIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareTwoToneIcon />
          </IconButton>
        </div>
        <div className={classes.btnRight}>
          <IconButton aria-label="delete">
            <DeleteTwoToneIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}

export default Cards;

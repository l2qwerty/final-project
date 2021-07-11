import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "transparent",
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    fontSize: "large",
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "transparent",
    color: "black",
    position: "static",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuBookTwoToneIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            GetBooks
          </Typography>
          <Link className={(classes.link, classes.button)} to="/contacts">
            <Button>Contacts</Button>
          </Link>
          <Link className={(classes.link, classes.button)} to="/cart">
            <Button variant="contained">Cart</Button>
          </Link>
          <Link className={(classes.link, classes.button)} to="/login">
            <Button variant="contained" color="primary">
              Log Out
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
}

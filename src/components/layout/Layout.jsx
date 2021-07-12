import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";

const useStyles = makeStyles({
  container: {
    marginBottom: "30px",
  },
});

function Layout() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.container}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Main />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Layout;

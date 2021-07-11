import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "../../routes/Routes";

const useStyles = makeStyles(() => ({
  main: {
    position: "static",
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Routes />
    </main>
  );
}

export default Main;

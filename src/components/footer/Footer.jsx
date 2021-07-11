/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  ink: {
    fontWeight: "bold",
  },
  container: {
    margin: "0 auto",
    maxWidth: "100%",
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Box borderTop={2} borderColor="grey.500">
        <Container className={classes.container}>
          <Grid item xs={12} container spacing={1}>
            <Grid item xs={12} sm={1}>
              <Box>
                <Button href="#" color="primary">
                  Privacy
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box>
                <Button href="#" color="primary">
                  Terms
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <Typography variant="h4" className={classes.title}>
                  GetBooks
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="subtitle1" className={classes.ink}>
                  2019-2020 GetBooks, Ink
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Box>
                <Button href="#">Support</Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Box>
                <Button href="#">Sign up</Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Box>
                <Button href="#">Sign in</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;

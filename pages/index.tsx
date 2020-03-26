import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import WelcomeButton from "../components/WelcomeButton/WelcomeButton";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box
        component={Container}
        className={classes.root}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <WelcomeButton>Welcome</WelcomeButton>
      </Box>
    </>
  );
};

export default Home;

import React from "react";
import MostPost from "../../components/most/Most";
import RightMenu from "../../components/rightmenu/Main";
import Navbar from '../../components/navbar/navbar/Navbar';
import Recent from '../../components/recent/index';
import Footer from '../../components/footer/footer.jsx'
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexFlow: ''
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <Box>
      <Container>
    <div className={classes.root}>
      <Grid container>
        <Navbar />
        <Recent />
        <Grid container item lg={8} md={12}>
          <Container>
            <MostPost />
          </Container>
        </Grid>
        <Grid container item lg={4} md={12}>
          <Container>
            <RightMenu />
          </Container>
        </Grid>
      </Grid>
    </div>
        <Footer />
      </Container>
  </Box>

  );
}

export default Home;

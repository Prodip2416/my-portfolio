import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.JPG";
import HomeContract from "./HomeContract";
import resume from '../resume/Prodip_Sarker.pdf';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Prodip Sarker" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Prodip Sarker"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "I'm a Full-Stack Engineer",
            "I'm a C#(.NET) Developer",
            "I'm a Writter",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
      </Typography>
      <HomeContract />
      <a href={resume} download="Resume_of_Prodip_Sarker.pdf" style={{ textDecoration: 'none' }}>
        <Button variant="contained" style={{ marginLeft: '30px', width: '150px', backgroundColor: 'tomato' }} color="primary">
          Resume
       </Button></a>
    </Box>
  );
};

export default Header;

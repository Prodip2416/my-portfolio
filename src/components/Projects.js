import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Animated } from "react-animated-css";


import project1 from "../images/creativeAgency.PNG";
import project2 from "../images/volunteer.PNG";
import project3 from "../images/travel.PNG";
import project4 from "../images/redOnion.PNG";
import project5 from "../images/onlineCourse.PNG";
import project6 from "../images/todo.PNG";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  headerColor: {
    color: '#ff7961'
  }
}));

const projects = [
  {
    name: "Creative Agency",
    description: `The creative agency is a web application for providing many services like web design, web development, graphic design, etc.`,
    image: project1,
    github: 'https://github.com/Prodip2416/creative-agency-client',
    live: 'https://creative-agency-app.netlify.app/'
  },
  {
    name: "Volunteer Network",
    description: `Volunteer network is an event management web application for providing many services like refuge shelter, Clean water for children, etc.`,
    image: project2,
    github: 'https://github.com/Prodip2416/volunteer-network-client',
    live: 'https://bd-volunteer-network.netlify.app/'
  },
  {
    name: "Travel Guru",
    description: `Travel Guru is an online booking web application. user can create an account or sing-up with google. user can select any place etc.`,
    image: project3,
    github: 'https://github.com/Prodip2416/travel-guru',
    live: 'https://travel-guru-app.netlify.app/'
  },
  {
    name: "Red Onion",
    description: `Red Onion is an online food service web application provided breakfast, lunch and dinner. user can order his/ her chosen food`,
    image: project4,
    github: 'https://github.com/Prodip2416/hot-onion-restaurent',
    live: 'https://red-onion-app.netlify.app/'
  },
  {
    name: "Online Course",
    description: `This is a simple online course web application for enroll their corses. Users can see the total amount of their selected courses.`,
    image: project5,
    github: 'https://github.com/Prodip2416/online-courses',
    live: 'https://online-courses-app.netlify.app/'
  },
  {
    name: "Todo App",
    description: `Simple todo web application by using react and material ui. your todo save your local storage in this web application`,
    image: project6,
    github: 'https://github.com/Prodip2416/my-todo-list',
    live: 'https://prodip-todo.netlify.app/'
  },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <Animated animationIn="bounceInRight" animationOut="bounceInLeft" isVisible={true} >
      <Box className="" >
        <Grid container justify="center">
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={5} lg={4} key={i}>
              <Card className={classes.cardContainer}  >
                <CardActionArea>
                  <div style={{ height: '250px',overflow: 'hidden' }}>
                    <img src={project.image} style={{ width: '350px'}} alt="" />
                  </div>
                  <CardContent>
                    <Typography variant="h5" gutterBottom className={classes.headerColor}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" color="primary" href={project.github} target="blank">
                    Github
                </Button>
                  <Button variant="contained" color="primary" href={project.live} target="blank">
                    Live Demo
                </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Animated>
  );
};

export default Projects;

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


import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/reduce.png";
import blog3 from "../images/bind.jpeg";
import blog4 from "../images/proto.png";
import blog5 from "../images/object.png";
import blog6 from "../images/array.jpeg";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
    headerColor: {
        color: '#ff7961'
    }
}));

const blogs = [
    {
        name: "What is DOM?",
        description: `In simple words, DOM is a document object model. When the browser parses an ...`,
        image: blog1,
        blog: 'https://medium.com/@prodip.sarker/what-is-dom-5a36054cf03d'
    },
    {
        name: "Javascript: reduce()",
        description: `The reduce() method executes a reducer function on each element of the array...`,
        image: blog2,
        blog: 'https://medium.com/@prodip.sarker/javascript-reduce-8e7bac556186'
    },
    {
        name: "Javascript: bind(), call() and apply()",
        description: `The bind() method creates a new function, when called, has its this keyword...`,
        image: blog3,
        blog: 'https://medium.com/@prodip.sarker/javascript-bind-call-and-apply-1ecb04254773'
    },
    {
        name: "Javascript: prototype",
        description: `The prototype is a property of any javascript function which is a point to ...`,
        image: blog4,
        blog: 'https://medium.com/@prodip.sarker/javascript-prototype-3d96330023aa'
    },
    {
        name: "Object In JS",
        description: `An object is a collection of properties, and a property is an ....`,
        image: blog5,
        blog: 'https://medium.com/@prodip.sarker/object-in-js-1eda998a44a6'
    },
    {
        name: "Array In JS",
        description: `In JavaScript, array is a single variable that is used to store ....`,
        image: blog6,
        blog: 'https://medium.com/@prodip.sarker/array-in-js-8da7d9553856'
    },
];

const Blog = () => {
    const classes = useStyles();
    return (
        <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true} >
            <Box className="" >
                <Grid container justify="center">
                    {blogs.map((project, i) => (
                        <Grid item xs={12} sm={8} md={5} lg={4} key={i}>
                            <Card className={classes.cardContainer}  >
                                <CardActionArea>
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img src={project.image} style={{ width: '350px' }} alt="" />
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
                                    <Button variant="contained" color="primary" href={project.blog} target="blank">
                                       Learn More
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

export default Blog;

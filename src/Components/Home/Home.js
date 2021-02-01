import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography, Paper } from "@material-ui/core";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import heroImage from "./heroBackground.jpg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `url(${heroImage})`,
    height: "500px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      // Changes height of hero for smaller devices
      height: 300,
      fontSize: "3em",
    },
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  heroContent: {
    backgroundColor: "#222",
    color: "#fff",
    marginLeft: theme.spacing(3),
    padding: theme.spacing(3),
    width: "25%",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    color: "primary",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Paper className={classes.heroContent} elevation={3} width="25%">
          <Typography variant="h4">Fitness stuff</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolores placeat, dignissimos hic quasi eius fugit obcaecati animi
          </Typography>
          <Button variant="outlined" color="secondary">My Dashboard</Button>
        </Paper>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" align="left" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?cs=srgb&dl=pexels-jonathan-borba-3076516.jpg&fm=jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sit Ups
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis alias culpa voluptas hic temporibus inventore
                    maxime illum fuga quos beatae. Consequatur iste porro sequi,
                    similique quaerat numquam nesciunt deserunt neque.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/841135/pexels-photo-841135.jpeg?cs=srgb&dl=pexels-victor-freitas-841135.jpg&fm=jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lifting
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nisi sequi soluta molestiae doloribus saepe vel libero
                    vitae, corrupti quaerat esse repellendus asperiores tempore
                    illo nemo sed repudiandae, ut reprehenderit sunt.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;

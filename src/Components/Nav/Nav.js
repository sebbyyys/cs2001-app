import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login.js";
import Logout from "./Logout.js";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {},
  tabs: {
    "& button:focus": {
      outline: "none",
    },
    // MuiTabTextColorSecondaryMuiSelected: "black"
  },
}));

function Nav() {
  const classes = useStyles();
  const [isLoggedIn, setLogin] = useState(false);
  let history = useHistory();

   useEffect(() => {
     if (isLoggedIn) {
       history.push("/Dashboard");
     } else {
       history.push("/");
       console.log("in else statement");
     }
   }, [isLoggedIn]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    history.push(tabNameToIndex[newValue]);
    setValue(newValue);
  };

  const tabNameToIndex = {
    0: "",
    1: "Exercises",
    2: "RepCounter",
    3: "Dashboard",
  };

  return (
    <>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar color="inherit">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs sm md>
              <Typography type="title" align="left" variant="h4" fontWeightBold>
                Home Fitness
              </Typography>
            </Grid>
            <Grid item xs sm md>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                className={classes.tabs}
              >
                <Tab label="Home" />
                <Tab label="Exercises" />
                <Tab label="Rep Counter" />
                <Tab label="Dashboard" />
                <Tab
                  icon={
                    isLoggedIn ? (
                      <Logout login={isLoggedIn} setLogin={setLogin} />
                    ) : (
                      <Login login={isLoggedIn} setLogin={setLogin} />
                    )
                  }
                />
              </Tabs>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* <Paper className={classes.root}>
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          className={classes.tabs}
        >
          <Tab label="Home" />
          <Tab label="Exercises" />
          <Tab label="Rep Counter" />
          <Tab label="Dashboard" />
          <Tab icon={isLoggedIn ? <Logout login={isLoggedIn} setLogin={setLogin}/> :
            <Login login={isLoggedIn} setLogin={setLogin}/>} />
        </Tabs>
      </Paper> */}
    </>
  );
}

export default Nav;

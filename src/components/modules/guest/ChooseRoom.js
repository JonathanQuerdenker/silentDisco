import Copyright from "../services/Footer";

import React, { useState, useEffect, }  from 'react';

import {IconButton, TextField, Link, Paper, Box, Grid, Typography, makeStyles} from '@material-ui/core';

// import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        overflow:'auto'
    },
    paper: {
        height: "100%",
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    sign:{
        backgroundColor: '#6f6f709a',
        display: "flex",
        alignItems: "center",
    },
    search:{
        width: "30vmax",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    fab:{
        fontSize: "60px",
    },
    container:{
        display: "flex",
        alignItems: "center",
    },
    headline:{
        color: theme.palette.secondary,
        textAlign: 'center',
    }
}));

function handleChange () {
    console.log(this)
}
function enterRoom() {
    console.log('clicked ' + this)
}
export default function ChooseRoom(props) {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>

            <Grid item xs={false} sm={8} md={7}  />
            <Grid className= {classes.sign} item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography className={classes.headline} component="h1" variant="h5">
                        You're in the lobby now,<br></br>
                        where would you like to party?
                    </Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <form className={classes.container} noValidate autoComplete="on" onSubmit={enterRoom}>
                            <TextField className={classes.search}
                                       id="filled-search"
                                       label="Search Dancehall"
                                       onChange={handleChange('room')}
                                       fullWidth
                                       type="search"
                                       margin="normal"
                                       variant="filled"
                                       color="red"
                            />

                            <IconButton
                                color="default"
                                type="submit"
                                style={{padding:0}}
                            >
                                {/*<SlowMotionVideoIcon*/}
                                {/*    className={classes.fab}*/}
                                {/*/>*/}
                            </IconButton>
                        </form>
                    </div>
                    <Box className={classes.copyright} mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
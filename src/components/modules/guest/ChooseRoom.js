import Copyright from "../services/Footer";

import {useHistory, useLocation} from 'react-router-dom'

import React, {useState, useEffect,} from 'react';

import {IconButton, TextField, Link, Paper, Box, Grid, Typography, makeStyles} from '@material-ui/core';

import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

import Cookies from 'js-cookie';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        overflow: 'auto'
    },
    paper: {
        // height: "100%",
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent'

    },
    // content:{
    //   flex:'1',
    //   display: 'flex',
    //   alignItems:'center'
    //
    // },
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
    sign: {
        backgroundColor: '#6f6f709a',
        display: "flex",
        alignItems: "center",
    },
    search: {
        width: "30vmax",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    fab: {
        fontSize: "60px",
    },
    container: {
        display: "flex",
        alignItems: "center",
    },
    headline: {
        color: theme.palette.secondary,
        textAlign: 'center',
    }
}));


export default function ChooseRoom(props) {
    const history = useHistory()
    const location = useLocation()
    const [room, setRoom] = useState()

    function handleChange(event) {
        setRoom(event.target.value)
        console.log('input field', e.target.value)
    }

    function enterRoom(e) {
        console.log('clicked ' + e.target.value)
        e.preventDefault()
        let url = ""
        if(location.pathname=="/stage/"){
            url="/enter-room"

        }
        else{
            url="/set-room"
        }
        const csrfToken = Cookies.get('_csrf')
        fetch(url, {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'CSRF-Token': csrfToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({room: room}),
        }).then(
            res => {
                if (res.ok) {
                    history.push(room)
                }
            }
        )


    }


    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>

            <Grid item xs={false} sm={8} md={7}/>
            <Grid className={classes.sign} item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <div className={classes.content}>
                        <Typography className={classes.headline} component="h1" variant="h5">
                            You're in the lobby now,<br></br>
                            where would you like to party?
                        </Typography>
                        <div>
                            <form className={classes.container} noValidate autoComplete="on" onSubmit={enterRoom}>
                                <TextField className={classes.search}
                                           id="filled-search"
                                           label="Search Dancehall"
                                           onChange={handleChange}
                                           fullWidth
                                           type="search"
                                           margin="normal"
                                           variant="filled"
                                           color="red"
                                />

                                <IconButton
                                    color="default"
                                    type="submit"
                                    style={{padding: 0}}
                                >
                                    <SlowMotionVideoIcon
                                        className={classes.fab}
                                    />
                                </IconButton>
                            </form>
                        </div>
                    </div>
                    <Box className={classes.copyright} mt={5}>
                        <Copyright/>
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}

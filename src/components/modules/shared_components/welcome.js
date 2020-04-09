import React from 'react';
import Copyright from "../shared_components/footer";

import {Avatar,Button, Link, Paper, Box, Grid, Typography, makeStyles } from '@material-ui/core/';
// import {LockOutlinedIcon} from '@material-ui/icons/';

// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

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
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    sign:{
        backgroundColor: '#6f6f709a',
        // opacity: 0.5,
        // filter:"blur(25)",
    }
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>

            <Grid item xs={false} sm={6} md={7}  />
            <Grid className= {classes.sign} item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography  component="h1" variant="h5">
                        Ready to RocknRoll, Bounce and Swing?
                    </Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Avatar className={classes.avatar}>
                        {/*<LockOutlinedIcon />*/}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        href="/login"
                    >
                        GO
                    </Button>

                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
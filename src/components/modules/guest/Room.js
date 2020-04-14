import Copyright from "../services/Footer";


import React, { useState, useEffect, }  from 'react';

// ----------MUI---------------

import Replay5RoundedIcon from '@material-ui/icons/Replay5Rounded';
import FolderIcon from '@material-ui/icons/Folder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {IconButton, Paper, Box, Grid, Typography, makeStyles, ListItemAvatar, ListItem, ListItemText, Avatar} from "@material-ui/core";

//-----------Spotify API ---------
//-----------Dummy constants------
const song = '';
const currentSong = '';

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
        // height: "100%",
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
        backgroundColor: '#6f6f709a'
        // display: "flex",
        // alignItems: "center",
    },
    search:{
        width: "30vmax",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    fab:{
        fontSize: "80px",
    },
    container:{
        display: "flex",
        alignItems: "center",
    },
    headline:{
        color: theme.palette.secondary,
        textAlign: 'center',
    },
    img:{
        height: "30vh",
        width: "30vh",
        content: "cover",
    },
    playingNow:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
}));

export default function Room(props) {
    const stage = props.match.params.id
    const classes = useStyles();
useEffect(()=>{
    console.log('the stage is '+ stage)}, []);

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={8} md={7}  />
            <Grid className= {classes.sign} item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    {/*<IconButton onClick={()=>console.log('click registered')}*/}
                    {/*            color="default"*/}
                    {/*            type="submit"*/}
                    {/*            style={{padding:0}}*/}
                    {/*>*/}
                    {/*    <ExitToAppIcon*/}
                    {/*        className={classes.fab}*/}
                    {/*    />*/}
                    {/*    <Typography className={classes.headline} component="h1" variant="h5">*/}
                    {/*        Exit*/}
                    {/*    </Typography>*/}
                    {/*</IconButton>*/}
                    <Typography className={classes.headline} component="h1" variant="h5">
                        Dance like nobody's watching!
                    </Typography>
                    {song ?
                        <ListItem className={classes.playingNow}
                        >
                            <ListItemAvatar>

                                {song[0].body.item.album.images[0].url?
                                    <img className={classes.img} src={song[0].body.item.album.images[0].url}/> :
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>}
                            </ListItemAvatar>
                            <ListItemText
                                primary={song[0].body.item.name}
                                secondary={song[0].body.item.artists[0].name}

                            />
                        </ListItem>

                        : currentSong &&
                        <ListItem className={classes.playingNow}
                        >
                            <ListItemAvatar>

                                {currentSong[0].body.item.album.images[0].url?
                                    <img className={classes.img} src={currentSong[0].body.item.album.images[0].url}/> :
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>}
                            </ListItemAvatar>
                            <ListItemText
                                primary={currentSong[0].body.item.name}
                                secondary={currentSong[0].body.item.artists[0].name}

                            />
                        </ListItem>}
                    <IconButton onClick={()=>console.log('click registered')}
                                color="default"
                                type="submit"
                                style={{padding:0}}
                    >
                        <Replay5RoundedIcon
                            className={classes.fab}
                        />
                        <Typography className={classes.headline} component="h1" variant="h5">
                            Synchronise Playback
                        </Typography>
                    </IconButton>
                    <div>
                    </div>
                    <Box className={classes.copyright} mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
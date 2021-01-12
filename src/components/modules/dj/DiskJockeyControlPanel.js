import Copyright from "../services/Footer";
import React, { useState, useEffect, }  from 'react';
// import axios from '../axios';
//
// import {socket} from '../src/socket';
// import {Route, Link } from "react-router-dom";

// ----------MUI---------------
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderIcon from '@material-ui/icons/Folder';
import Avatar from '@material-ui/core/Avatar';


import Paper from '@material-ui/core/Paper';
//-----------Spotify API ---------
// var SpotifyWebApi = require('spotify-web-api-node');


export default function DjControlPanel (props){
    // const roomUrl = [];
    //
    // const [room, setRoom] = useState();
    const [playlists, setPlaylists] = useState();
    const [values, setValues] = React.useState({
        playlist:'',
    });
    // const [song, setSong] = useState();
    const [currentSong, setCurrentSong] = useState();

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
            justifyContent: 'center',
            backgroundColor: 'transparent'

        },
        paperRight:{
            // height: "100%",
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        allCentered:{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems: "center",
            // opacity: 0.5,
            // filter: "blur(25px)",
        },
        search:{
            width: "30vmax",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            // textDecorationColor: "white",
        },
        fab:{
            // margin: theme.spacing(1),
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
        copyright:{
            justifySelf: "flex-end"
        },
        img:{
            height: "80px",
            width: "80px",
            content: "cover",
        }
    }));


    const classes = useStyles();

    useEffect(() => {
        console.log('here comes the dj');
        // (async()=> {
        //     const a =  await axios.get('/run');
        //     spotifyApi.setAccessToken(a.data);
        //     const song = await spotifyApi.getMyCurrentPlayingTrack();
        //     console.log("----SONG------", song);
        //     setCurrentSong(song);
        //     console.log('i am in state', currentSong);
        //     // });
        // })();




    }, []);

    const handleChange = name => event => {
        (event.target.value != "" ? setValues({ ...values, [name]: event.target.value }) : setPlaylists(""));
    };

    const handleSubmit = e => {
        console.log('na danke merkel', values, props.match.params.id);

        e.preventDefault();
        //
        spotifyApi.searchPlaylists(values.playlist, { limit : 5, offset : 0 })
            .then(a=>{
                console.log('this should really happen ',a.body.playlists.items);

                setPlaylists(a.body.playlists.items);
            });
        //
        // //-------------GET CURRENT TRACK FROM DJ-------------------
        //
        // spotifyApi.getMyCurrentPlaybackState().then(a=>console.log('current PLAYBACK',a));
        // // spotifyApi.getMyCurrentPlayingTrack().then(a=>console.log('current playing TRACK',a));
    };

    // const useSpotifyApp = function(){
    //     var date =  Date.now();
    //
    //
    //     spotifyApi.getMyDevices().then(a=>{
    //         const device_id = a.body.devices[0].id;
    //         console.log(device_id);
    //         spotifyApi.getMyCurrentPlayingTrack()
    //             .then(a=>{
    //                 console.log('what is currently playing a.body ', a.body.is_playing);
    //
    //                 if (a.body.is_playing){
    //                     var date =  Date.now();
    //                     let emitDetails=[a, props.match.params.id, date];
    //                     console.log('current playing TRACK',a, props.match.params.id, date);
    //                     socket.emit('PlayThisTrack', emitDetails);
    //                 } else {
    //                     console.log("Nothing is currently playing");
    //                     alert("Nothing is currently playing");}
    //             });
    //     });
    // };

    // const loadSinglePlaylist = function (playlist){
    //     console.log('want to get single tracks', playlist);
    //     setPlaylists("");
    //
    //     spotifyApi.getMyDevices().then(a=>{
    //         const device_id = a.body.devices[0].id;
    //         console.log(device_id);
    //         (async()=>{
    //             const playNow = await spotifyApi.play({
    //                 "device_id": device_id,
    //                 "context_uri": playlist.uri,
    //                 "offset":{
    //                     "position": 0
    //                 },
    //                 "position_ms": 0
    //             });
    //             spotifyApi.getMyCurrentPlaybackState(playNow).then(a=>{
    //                 console.log('current PLAYBACK 22222',a);
    //                 // var date =  Date.now();
    //                 let emitDetails=[a, props.match.params.id, Date.now()];
    //                 console.log('current playing TRACK',a, props.match.params.id, Date.now());
    //                 socket.emit('PlayThisTrack',emitDetails);
    //                 setCurrentSong(a);
    //
    //             });
    //         })();
    //
    //     });
    // };

    return (
        <Grid container component="main" className={classes.root}>
            <Grid className= {classes.allCentered} item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography className={classes.headline} component="h1" variant="h5">
                        Feeling lucky?<br></br>
                        Search for a playlist!
                    </Typography>
                    <div>
                        <form className={classes.container} noValidate autoComplete="on" onSubmit={handleSubmit}>
                            <TextField className={classes.search}
                                       id="filled-search"
                                       label="Search For Good Tunes"
                                       onChange={handleChange('playlist')}
                                       fullWidth
                                       type="search"
                                       margin="normal"
                                       variant="filled"
                                       color="red"
                            />

                            <IconButton
                                color="default"
                                type="submit"
                                style={{padding:0, marginLeft:"10px"}}
                            >
                                <SearchRoundedIcon
                                    className={classes.fab}
                                />
                            </IconButton>
                        </form>
                    </div>
                    <List >
                        {playlists && playlists.map(a=>
                            <ListItem key={a.id}>
                                <ListItemAvatar>
                                    {a.images[0]?
                                        <img className={classes.img} src={a.images[0].url}/> :
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>}
                                </ListItemAvatar>
                                <ListItemText
                                    primary={"" + a.name}

                                />
                                <ListItemSecondaryAction onClick={()=>loadSinglePlaylist(a)}>
                                    <IconButton edge="end" aria-label="delete">
                                        <SlowMotionVideoIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>,
                        )}
                    </List>
                </div>
            </Grid>
            <Grid className= {classes.allCentered} item xs={12} sm={6} md={7}  >
                <div className={classes.paperRight}>
                    <Typography className={classes.headline} component="h1" variant="h5">
                        Control with my Spotify App
                    </Typography>
                    { currentSong &&
                    <ListItem className={classes.playingNow}
                    >
                        <ListItemAvatar>

                            {currentSong.body.item.album.images[0].url?
                                <img className={classes.img} src={currentSong.body.item.album.images[0].url}/> :
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>}
                        </ListItemAvatar>
                        <ListItemText
                            primary={currentSong.body.item.name}
                            secondary={currentSong.body.item.artists[0].name}

                        />
                    </ListItem> }
                    <IconButton onClick={()=>useSpotifyApp()}
                                color="default"
                                type="submit"
                                style={{padding:0}}
                    >
                        <SlowMotionVideoIcon
                            className={classes.fab}
                        />
                    </IconButton>
                    {/* <div >Easteregg</div> */}
                </div>
                <Box className={classes.copyright} mt={5}>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    );
}

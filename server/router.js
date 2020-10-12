const path = require('path')
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const router = express.Router()
require('dotenv').config()

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
})


const config = {
    scope: [
        "user-read-email",
        "user-read-private",
        "user-top-read",
        "user-follow-read",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-recently-played",
        "user-read-playback-state",
        "playlist-modify-private",
        "playlist-modify-public"
        // "ugc-image-upload"
    ],
    showDialog: true
}

router.get('/login', (req, res) => {
    const uri = spotifyApi.createAuthorizeURL(config.scope, '', config.showDialog)
    // console.log(process.env.CLIENT_ID, process.env.REDIRECT_URI)
    // const url = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&scope=${config.scope.join('%20')}&show_dialog=${config.showDialog}`
    console.log(uri)
    res.redirect(uri)
})

router.get('/callback', (req, res) => {
    const {code} = req.query
    spotifyApi.authorizationCodeGrant(code).then(
        function (data) {
            req.session.authToken = data.body.access_token
            console.log('router callback', req.session.authToken)
            res.redirect('/guest-or-dj')
        }
    ).catch(function (error) {
        console.log(error)
        res.redirect('/')
    })
    console.log(code)

})


let rooms = []
router.post('/set-room', (req, res) => {
    spotifyApi.setAccessToken(req.session.authToken)
    spotifyApi.getMyCurrentPlaybackState().then(response => {
        let chosenRoom = req.body.room
        const currentRoom = rooms.find(room => room.name === chosenRoom)
        if (currentRoom) {
            //    todo check if dj is the owner of the room, then update state otherwise send error_msg
        } else {
            rooms.push({
                name: req.body.room,
                currentSong: {
                    uri: response.body.item.uri,
                    timestamp: response.body.timestamp,
                    progress: response.body.progress_ms
                }
            })
        }
        console.log('the current song is: ', rooms)
        res.send()
    }).catch(error => {
        //    todo
    })

//    todo check rooms

})

router.post('/enter-room', (req, res) => {
    let chosenRoom = req.body.room
    spotifyApi.setAccessToken(req.session.authToken)
    const currentRoom = rooms.find(room => room.name === chosenRoom)
    if (currentRoom) {
        const offset = new Date() - new Date(currentRoom.currentSong.timestamp);
        console.log("offset is ", offset)
        console.log("prgrss is ", typeof currentRoom.currentSong.progress)
        spotifyApi.play({
            // "device_id": device_id,
            "uris": [currentRoom.currentSong.uri],
            "position_ms": 50000
        }).then(response => {
                console.log(response)
                res.send()
            }
        ).catch(error=>console.log(error))

    } else {
        //    todo
    }
})
//last route
router.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd() + '/public/index.html'));
});

module.exports = router
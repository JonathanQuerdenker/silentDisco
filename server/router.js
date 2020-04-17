const path = require('path')
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const router = express.Router()
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
            console.log(data)
        }
    ).catch(function (error) {
        console.log(error)
    })
    console.log(code)
    res.send(process.env.CLIENT_SECRET)
})


//last route
router.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd() + '/public/index.html'));
});

module.exports = router
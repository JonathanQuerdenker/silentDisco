# Silent Disco
-- more on HackMD.io --

## Data model on server
- Room
    - owner/dj: User/spotify ID
    - currentSongId: int/string
    - guests: User[]
- User
    - sessionId: int/string
    - spotifyAccessToken: string



## User Stories
### DJ creates room
1. User logs in using spotify
    - Server sets session in user client
    - Server stores session together with room id and spotify access token
2. User creates room
    - server stores room and sets the current user session as owner/dj for this room
3. User starts song
    - server stores that this song is currently playing in this room
    - server sends request to spotify API to play this song for every user that is in this room


### User joins room
1. User logs in using spotify
    - Server sets session in user client
    - Server stores session together with room id and spotify access token
2. User selects room
    - Server stores that this user is now part of this room
    - server sends request to spotify API to play the current song of this room (including offset)
    - Server returns name of current song


### User synchronises playback
1. User clicks sync button
    - Send request to server to sync
    - Server sends request to spotify api to play current song of room with related offset

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const middleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const compiler = webpack(config)
// our localhost port
const port = 4001

const app = express()
app.use(middleware(compiler,{}))
app.use("*", express.static("./public"))
// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected')
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
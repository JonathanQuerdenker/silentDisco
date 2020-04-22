const http = require('http')
const socketIO = require('socket.io')
require ('dotenv').config()

// const express = require('express')
// const path = require('path')
// const router = require("./server/router")
const port = 4001
const {app} = require('./server/middleware')


if (process.env.NODE_ENV !== "production") {
  const middleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)
  app.use(middleware(compiler, {}))
}

// our localhost port
// app.use(express.static("./public")) //move to middleware.js
// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)//.listen(app.listen(4001))

io.use((socket, next)=>middleware(socket.request, socket.request.res, next))
//TODO serve middleware to io.server

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log(`User with the id ${socket.id} connected`)

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

// app.use('/', router) //move to middleware.js


server.listen(port, () => console.log(`Listening on port ${port}`))
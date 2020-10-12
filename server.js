// const app = require('./server/middleware')
import app from './server/middleware'
const http = require('http')
const socketIO = require('socket.io')
import ('dotenv/config')

// localhost port
const port = 4001

//server instance
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

server.listen(port, () => console.log(`Listening on port ${port}`))
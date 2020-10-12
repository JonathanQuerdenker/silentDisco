const express = require('express')
const app = express()
const compression = require('compression')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const csurf = require('csurf')
const router = require("./router")
import bodyParser from 'body-parser'
//QUESTION:  use req.session instead of cookie?


if (process.env.NODE_ENV !== "production") {
    const middleware = require('webpack-dev-middleware')
    const webpack = require('webpack')
    const config = require('../webpack.config')
    const compiler = webpack(config)
    app.use(middleware(compiler, {}))
}
const cookieSessionMiddleware = cookieSession({
        name: "session",
        secret: process.env.SESSION_SECRET,
        maxAge: 1000 * 60 * 60 * 24
    }
)


app.use(cookieParser())
    .use(cookieSessionMiddleware)
    .use(compression())
    // .use(csurf({cookie: true}))
    .use(bodyParser.json())
    .use(express.static("./public"))
    .use('/', router)


module.exports = app



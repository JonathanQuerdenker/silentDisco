const express = require('express')
const app = express()
const compression = require('compression')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const csurf = require('csurf')
const middleware = require('webpack-dev-middleware')
const router = require("./router")
require('dotenv').config()


//QUESTION:  use req.session instead of cookie?

const webpack = require('webpack')
const config = require('../webpack.config')
const compiler = webpack(config)

const cookieSessionMiddleware = cookieSession({
        name: "session",
        secret: process.env.SESSION_SECRET,
        maxAge: 1000 * 60 * 60 * 24
    }
)

app.use(middleware(compiler, {}))
    .use(cookieParser())
    .use(compression())
    .use(csurf({cookie: true}))
    // .use(function (req, res, next) {
    //     res.cookie('securityToken', req.csrfToken())
    //     next()
    //
    // })
    .use(express.static("./public"))
    .use('/', router)
    .use(cookieSessionMiddleware)

exports.app = app



'use strict'

const config = require('./config.js')
const ConnectionPool = require('./src/ConnectionPool')

const pool = new ConnectionPool(config)

pool.start()

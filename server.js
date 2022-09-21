const express = require('express')
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit')
const cluster = require('cluster')
const totalCPUs = require('os').cpus().length

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', () => {
    cluster.fork()
  })
} else {
  const app = express()
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })

  app.use(bodyParser.json())
  app.use(limiter)

  const PORT = process.env.PORT || 5000

  app.listen(PORT)
}
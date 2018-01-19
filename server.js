const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const workerRoutes = require('./routes/workerRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())



app.use('/api', workerRoutes)
app.use('/admin', adminRoutes)


app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`
  res.status(status).json({ status, message })
})

app.use((err, _req, res, _next) => {
  // parse error message
  err = processErrorMessage(err)
  // display client error on server (if enabled)
  if (printClientErrorsOnServer) console.error(err)
  // send error to client
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!'
  res.status(status).json({ status, message })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('listening on port', port)
})



module.exports = app

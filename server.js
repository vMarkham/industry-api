require('dotenv').load()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const workerRoutes = require('./routes/workerRoutes')
const adminRoutes = require('./routes/adminRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())



app.use('/api', workerRoutes)
app.use('/admin', adminRoutes)
app.use('/logs', authRoutes)

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`
  res.status(status).json({ status, message })
})

app.use((err, _req, res, _next) => {
  // console.log(err, 'it went wrong');
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!'
  console.log(message);
  res.status(status).json({ status, message })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('listening on port', port)
})



module.exports = app

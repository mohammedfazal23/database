const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const studentRoute = require('./routers/student')

mongoose.connect('mongodb://localhost:27017//testdb', { useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('DB connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.use('/api/student', studentRoute)
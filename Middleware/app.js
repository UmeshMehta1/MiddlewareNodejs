import express from 'express'
const app = express()
import web from './routes/web.js'
import student from './routes/student.js'
import logger from './logger-middleware.js'

// Application Level Middleware

app.use('/about',logger)

//Load Routes
app.use('/', web)
app.use('/', student)

// set template Engine
app.set('view engine', 'ejs');


app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})
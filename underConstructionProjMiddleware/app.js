import express from 'express'
const app = express()
// const router = express.Router();
import web from './routes/web.js'
import underConstruction from './middleware/uc-middleware.js'


app.set('view engine', 'ejs')


// app.use('/',web)
// app.use(underConstruction)   // ===> all site under construction
app.use('/about',underConstruction)  //===> single page under construction


app.listen(4000,()=>{
    console.log("server running")
})

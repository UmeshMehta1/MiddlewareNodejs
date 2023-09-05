import { studentController } from '../controllers/studentcontroller.js'
import logger from '../logger-middleware.js'
import router from './web.js'

// Router Level Middleware
// router.use(logger)

router.use('/student', logger)

router.get('/student', studentController)
router.get('/event', (req,res)=>{
    res.send("event")
})

export default router
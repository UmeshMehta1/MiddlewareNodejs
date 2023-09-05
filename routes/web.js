import express, { response } from "express";
const router =express.Router()

import {homeController} from '../controllers/homeController.js'
import {aboutController} from '../controllers/aboutController.js'
// import {studentController} from '../controllers/studentcontroller.js'


router.get('/', homeController)
router.get('/about', aboutController)
router.get('/about/12', (req,res)=>{
    res.send('/about/12')
})

// router.get('/student', studentController)
export default router

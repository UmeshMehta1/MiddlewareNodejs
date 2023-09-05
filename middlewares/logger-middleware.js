const logger = (req,res, next)=>{
    console.log("mylogger")
    next()
}

export default logger
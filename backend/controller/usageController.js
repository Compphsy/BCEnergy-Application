const asyncHandler = require('express-async-handler')

const getUsage = asyncHandler( async (req, res) => {
    if(!req.body.user){
        res.status(400)
        throw new Error('Not logged in')
    }
    else if(!req.body.usage){
        res.status(400)
        throw new Error('No usage data found yet for user')
    }
    else{
        console.log(req.body.usage)
        res.status(200).json({message:'Usage data dispalyed'})
    }
   }
)
   const setUsage = asyncHandler( async (req, res) => {

    if(!req.body.user){
        res.status(400)
        throw new Error('Cannot set usage data without a user, redirect to login')
    }
    else if(!req.body.usage){
        res.status(400)
        throw new Error('No usage data found yet for user, create a new usage data document')
    }
    else{
        console.log(req.body.usage)
        res.status(200).json({message:'Usage data set for user'})
    }
   }
   )
   const updateUsage = asyncHandler(async (req, res) => {
    if(!req.body.user){
        res.status(400)
        throw new Error('Cannot update usage data without a user, redirect to login')
    }
    else if(!req.body.usage){
        res.status(400)
        throw new Error('No usage data found yet for user, cannot update usage data')
    }
    else{
        console.log(req.body.usage)
       res.status(200).json({message:`Update usage ${req.params.id}`})
    }
   }
   )
   const deleteUsage = asyncHandler(async (req, res) => {
    if(!req.body.auth){

        res.status(400)
        throw new Error('Cannot delete usage data unless you are an admin')
    }
    else if(!req.body.usage){
        res.status(400)
        throw new Error('No usage data found yet for user, cannot delete usage data')
    }
    else{
       res.status(200).json({message:`Delete usage ${req.params.id}`})
    }

   }
   )
   
   module.exports = {
       getUsage,
       setUsage,
       updateUsage,
       deleteUsage
   }
   
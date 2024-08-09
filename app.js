import express from 'express'
import HomeLoanModel from './models/index.js'

const app = express()
app.use(express.json())

app.get('/home_loan',async(req,res)=>{
    console.log(req.path)
    try{
        const home_loan= await HomeLoanModel.HomeLoan.findAll()
        res.status(200).json({success:true, data:home_loan})
    }catch(error){
        res.status(500).send({error:error.message})
    }
})

app.listen(3000,()=>{console.log("server started")})

import express from 'express'
import mongoose from 'mongoose'
mongoose.set('strictQuery',false)
import cors from 'cors'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv'

const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res)=>{
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)
app.use('/questions',questionRoutes )
app.use('/answer',answerRoutes)
dotenv.config();
const PORT = process.env.PORT || 5000

const CONNECTION_URL =process.env.TOKEN_URL
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> {console.log(`server running on port ${PORT}`)}))
    .catch((err)=> console.log(err.message))


   

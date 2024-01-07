import express from 'express'
import connectDB from './config/connectDB.js'
import { config } from 'dotenv'
config()
import ratingRoutes from './routes/ratingRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import cors from 'cors'
//create server application
const app = express()
const port = process.env.PORT || 5050
connectDB()

//cross origin resource sharing
app.use(cors())

//body parser
app.use(express.json())

// app.get('/', (req, res) => res.send('Hello World!'))

//router
app.use('/ratings', ratingRoutes)
app.use('/events', eventRoutes)

//listener
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
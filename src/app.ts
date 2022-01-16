import env from 'dotenv'
import express from "express";

const app = express()
app.use(express.json())
env.config()


app.listen(process.env.PORT || 7000, () => console.log({

    success: true,
    message: 'Server is running on ' + process.env.PORT

}));




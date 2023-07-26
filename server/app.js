const express=require('express')
const dotenv=require('dotenv')
// const {chats}=require("./data/data")
const connectDB=require("./config/db")
const userRoutes=require("./routes/userRoutes")
const chatRoutes=require("./routes/chatRoutes")

const { notFound, errorHandler } = require("./middleware/errormiddleware");
dotenv.config()

connectDB();


const app=express()








// const app=express()
app.use(express.json())

app.get("/",(req,res)=>
{
    res.send("Api is running");
})

app.use("/api/user",userRoutes)
app.use("/api/chat",chatRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT =process.env.PORT||5000


app.listen(PORT,console.log(`running ${PORT}`))
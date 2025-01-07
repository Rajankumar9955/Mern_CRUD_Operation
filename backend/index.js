


const express=require("express");
const app=express();

const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
require("dotenv").config();
const StuRoute=require("./Routes/StuRoutes")
const DataBase=process.env.DATABASE
const port=process.env.PORT
mongoose.connect(DataBase).then((res)=>{
    console.log("DataBase Connected!!!");
})

app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/students",StuRoute);

app.listen(port,()=>{
    console.log(`server Listen on ${port} Port!!`);
})
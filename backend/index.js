


const express=require("express");
const app=express();
const port=8000;
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const StuRoute=require("./Routes/StuRoutes")

mongoose.connect("mongodb://127.0.0.1:27017/merncruddatabase").then((res)=>{
    console.log("DataBase Connected!!!");
})

app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/students",StuRoute);

app.listen(app,()=>{
    console.log(`server Listen on ${port} Port!!`);
})
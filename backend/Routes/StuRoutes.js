

const express=require("express");
const route=express.Router();
const StuController=require("../Controllers/StuController")

route.post("/datasave",StuController.StuDataSave);
route.get("/datadisplay",StuController.dataDisplay);


module.exports=route;
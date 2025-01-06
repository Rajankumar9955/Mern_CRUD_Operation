

const express=require("express");
const route=express.Router();
const StuController=require("../Controllers/StuController")

route.post("/datasave",StuController.StuDataSave);
route.get("/datadisplay",StuController.dataDisplay);
route.post("/deletedata",StuController.DeleteData);


module.exports=route;


const StuModel=require("../Models/StuModel")
const StuDataSave=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
      console.log(req.body);
     await StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
     })
     res.send("ok");
}
const dataDisplay=async(req,res)=>{
           const mydata=await StuModel.find();
           res.send(mydata);
}
module.exports={
    StuDataSave,
    dataDisplay
}
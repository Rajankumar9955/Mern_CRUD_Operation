

const StuModel=require("../Models/StuModel")
const StuDataSave=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
      console.log(req.body);
      console.log(rollno);
     await StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
     })
     res.send("ok");
}

module.exports={
    StuDataSave,
}
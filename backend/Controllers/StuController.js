
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
const DeleteData=async(req,res)=>{
    const {id}=req.body;
       const data=await StuModel.findByIdAndDelete(id);
       res.send(data);
}
const EditShowData=async(req,res)=>{
    const {id}=req.body;
    const formdata=await StuModel.findById(id);
    res.send(formdata);
}
const EditDataSave=async(req,res)=>{
    const {_id,rollno,name,city,fees}=req.body;
        const UpdatedData=await StuModel.findByIdAndUpdate(_id,{
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send(UpdatedData)
}

const DataSearch=async(req,res)=>{
    const {Name}=req.body;
    const searchdata=await StuModel.find({"name":{$regex:Name,$options:'i'}});
    console.log(searchdata)
    res.send(searchdata)
}

module.exports={
    StuDataSave,
    dataDisplay,
    DeleteData,
    EditShowData,
    EditDataSave,
    DataSearch
}
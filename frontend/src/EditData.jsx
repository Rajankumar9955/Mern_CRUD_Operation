import { useEffect, useState } from "react";
import axios from "axios";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
const EditData=()=>{
    const navigate=useNavigate()

    const {id}=useParams();
    
    const [input,setInput]=useState({});


  const loadData=()=>{
    let api="http://localhost:8000/students/editdatadisplay";
    axios.post(api,{id:id}).then((res)=>{
        setInput(res.data);
    })
  }

  useEffect(()=>{
         loadData();
  },[])

  const handleInput=(e)=>{
    // const name=e.target.name;
    // const value=e.target.value; //if you want to write then you can write same as write like below
    const {name,value}=e.target;
    setInput(values=>({...values, [name]:value}));
    console.log(input);

  }

  const handleSubmit=()=>{
    let api="http://localhost:8000/students/editdatasave";
    axios.post(api,input).then((res)=>{
      console.log(input);
      alert("Data Edited!!");
      navigate("/update")
    })
  }

  return(
    <>
    <div align="center" style={{marginTop:"40px"}}>
    <h1>Please Edit Students Data!!!!</h1>
    <div style={{width:"400px",border:"2px solid black"}}>
        {/* ====================Form ======================= */}
    <FloatingLabel controlId="floatingInput" label="Rollno" className="mb-1">
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handleInput}/>
    </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-1">
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="City" className="mb-1">
        <Form.Control type="text" name="city" value={input.city}  onChange={handleInput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Fees" className="mb-1">
        <Form.Control type="text" name="fees" value={input.fees}  onChange={handleInput}/>
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Success</Button>
        </div>
    </div>
    </>
  )
}
export default EditData;
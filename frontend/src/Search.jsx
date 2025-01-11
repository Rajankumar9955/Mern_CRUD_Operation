import { useState } from "react";

import axios from "axios";
import {useNavigate} from "react-router-dom"
const Search=()=>{
    const navigate=useNavigate()
    const [Name,setName]=useState("");

    const [mydata,setMyData]=useState([])
    const handleSearch=()=>{
        let api="http://localhost:8000/students/datasearch"
        axios.post(api,{Name:Name}).then((res)=>{
           setMyData(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td style={{border:"1px solid black"}}>{key.rollno}</td>
                    <td style={{border:"1px solid black"}}>{key.name}</td>
                    <td style={{border:"1px solid black"}}>{key.city}</td>
                    <td style={{border:"1px solid black"}}>{key.fees}</td>
                </tr>
            </>
        )
    })
    return(
        <>
      
        <h1 align="center">Search section</h1>
        <div align="center">
            <input type="search" placeholder="Enter Name" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button>
        </div>
        <hr  size="4" color="black"/>
        <table style={{border:"1px solid black",width:"93%",marginLeft:"40px",marginRight:"40px"}}>
            <tr >
                <th style={{border:"1px solid black"}}>Rollno</th>
                <th style={{border:"1px solid black"}}>Name</th>
                <th style={{border:"1px solid black"}}>City</th>
                <th style={{border:"1px solid black"}}>Fees</th>
            </tr>
            {ans}
           </table>
        
        </>
    )
}
export default Search;
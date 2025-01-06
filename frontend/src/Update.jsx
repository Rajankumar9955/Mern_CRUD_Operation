


import { useEffect, useState } from "react";
import axios from "axios";

import editImg from "./Images/edit.jpeg";
import dltImg from "./Images/dlt.png"

const Update=()=>{
    const [myData,setMydata]=useState([]);










     
    

    const loadData=()=>{
        let api="http://localhost:8000/students/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])

    const delData=(id)=>{
        let api="http://localhost:8000/students/deletedata";
        axios.post(api,{id:id}).then((res)=>{
            alert("Data Deleted!!")
            loadData();
        })
    }
    const ans=myData.map((key)=>{
        return(
            <>
                <tr>
                    <td style={{border:"1px solid black"}}>{key.rollno}</td>
                    <td style={{border:"1px solid black"}}>{key.name}</td>
                    <td style={{border:"1px solid black"}}>{key.city}</td>
                    <td style={{border:"1px solid black"}}>{key.fees}</td>
                    <td style={{border:"1px solid black"}}>
                                    <a href="#" ><img src={editImg} alt=""  id="update"/></a>
                    </td>
                    <td style={{border:"1px solid black"}}>
                               <a href="#" onClick={()=>{delData(key._id)}}><img src={dltImg} alt=""  id="update"/></a>
                    </td>
                </tr>
            </>
        )
    })
    return(
        <>
        <h1 align="center" style={{marginTop:"30px",marginBottom:"30px"}}>This is Display Section!!</h1>
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
export default Update;
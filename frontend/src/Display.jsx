import { useEffect, useState } from "react";
import axios from "axios";

const Display=()=>{
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
    const ans=myData.map((key)=>{
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
export default Display;
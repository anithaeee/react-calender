import React from 'react'
import { Calendar } from 'primereact/calendar';
import '../forms/child.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import  {useState} from 'react';
const Child = () => {
  const[name,setname]= useState("");
  const[date,setdate]= useState(null);
  const[data,setdata] = useState([]);
  const[age,setage] = useState([]);
    const handleChange = ()=>{
    let val1 = data;
    val1.push({name:name,Date:date})
    setdata(val1);
   }
  return (
    <div className='container'>
       <div className='formcontainer'>
         <div style={{padding:'5px'}}>
           <label>Enter your name:
              <InputText value={name} onChange={(e)=>{setname(e.target.value)}} />
           </label>
        </div>
         
         <div style={{padding:"10px"}}>
           <label>Enter date:
             <Calendar value={date} onChange={(e)=>{setdate(e.target.value)}} showIcon />
           </label>
         </div>
         <div>
           <label>Enter yor age:
             <Calendar value={age} onChange={(e)=>{setage(e.target.value)}} showIcon />
           </label> 
         </div>
         <Button  label="submitt"onClick={()=>handleChange()} style={{margin:"10px",position:"absolute",borderRadius:"6px",backgroundColor:"blue",color:"white"}}></Button>
       </div>
    </div>
  )
}

export default Child;
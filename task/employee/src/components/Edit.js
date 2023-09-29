import {React,useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Edit.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';




function Edit() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [desig,setDesig]=useState('')


// object for hook 
  const params= useParams()
  // console.log(params.id);

  const fetchEmp=async ()=>{
       const result=await axios.get('http://localhost:8000/getAnEmp/'+params.id)
console.log(result.data.employee);

setId(result.data.employee.id)
setUname(result.data.employee.uname)
setDesig(result.data.employee.designation)

// console.log(id);
// console.log(uname);

  }

  const location =useNavigate()
  
const handleUpdate=async (e)=>{
  e.preventDefault()
 
const body={
  id,
  uname,
  desig,
}
   const result=await axios.post('http://localhost:8000/editEmp',body)
alert(result.data.message)
location('/')
}


  useEffect(()=>{
fetchEmp()
  },[])

  return (
    <div>

<h3 style={{textAlign:'center',fontSize:'60px'}}>Edit Task</h3>


<Form style={{margin:"auto"}} className='p-5  w-50 container text-center card' >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label><h5>Name</h5></Form.Label>
<Form.Control   type="text" placeholder="username" value={uname}
onChange={(e)=>setUname(e.target.value)}/>
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label> <h5>Task</h5></Form.Label>
<Form.Control   type="text" placeholder="designation" value={desig}
onChange={(e)=>setDesig(e.target.value)}/>
  </Form.Group>
 
  <Button onClick={(e)=>handleUpdate(e)} style={{textAlign:'center', background:"black"}}  className="mt-3" >Update</Button>

</Form>


    </div>
  )
}

export default Edit
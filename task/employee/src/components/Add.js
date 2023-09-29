import {React,useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';




function Add() {
  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [desig,setDesig]=useState('')

  // console.log(uname);

  useEffect(()=>{
setId(uuid().slice(0,3))
  },[])

  //create a object for the hook

let location=useNavigate()


  const addEmployee=async(e)=>{
    e.preventDefault()
setId(uuid().slice(0,3))
const body={
  id,
  uname,
  designation:desig,
}

    const result=await axios.post('http://localhost:8000/addEmployee',body)
    alert(result.data)

    //redirection to homepage
    location('/')
    console.log(result);
// console.log(body);

    // console.log(id);

    // console.log(uname);
    // console.log(age);
    // console.log(desig);
    // console.log(salary);

  }

  

  return (
    <div>

<h3 style={{textAlign:'center',fontSize:'60px'}}>Add New Task</h3>


<Form className='p-5  w-75 container text-container' >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Name</Form.Label>
<Form.Control   onChange={(e)=>setUname(e.target.value)} type="text" placeholder=""/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Task</Form.Label>
<Form.Control  onChange={(e)=>setDesig(e.target.value)} type="text" placeholder=""/>
  </Form.Group>


  <Button onClick={(e)=>addEmployee(e)} className="ms-5" style={{background:"black"}} >Add Task</Button>

  <Link to={'/'}>
      <Button className="ms-5" style={{background:"red"}}>Cancel</Button>
      </Link>
</Form>

    </div>
    
  )
}

export default Add
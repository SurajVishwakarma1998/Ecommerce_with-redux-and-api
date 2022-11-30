import React, { useState } from 'react'
import {  useSelector } from 'react-redux';
import {Form,Container,Button} from "react-bootstrap";
import { Link, redirect} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username,setUsrname]=useState("");
  const [login,setLogin]=useState(true);
  const [loginUser,setLoginUser]=useState("");
  const [msg,setMsg]=useState("");
  const navigate = useNavigate();

 
  const userlist = useSelector((state)=>state.users.value)
 
  
 const CheckUser=(uname)=>{
    userlist.find((user)=>{
        if(user.username === uname){
          console.log(`${user.username} login sucessfuly`);
          setLoginUser(user.name);
          setUsrname("");
          navigate("/");
        }
        setMsg("Try again please")
    })
 }


  return (
    <>

      <Container style={{width:"400px"}} className="me-auto" >
        <Form className="my-5 p-3" style={{backgroundColor:"#14A44D",borderRadius:"10px"}} > 
        <h3>Login Form</h3>
        <Form.Group className="mb-3 py-2" >
            <Form.Label style={{fontWeight:500}}>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your Username"  onChange={(e)=>setUsrname(e.target.value)} />
        </Form.Group>
             <Button onClick={()=>CheckUser(username)} variant="secondary">Login</Button>
          <h5>{msg}</h5>  
         
          
        </Form> 
        <div className=" p-2"  style={{width:"375px",display:"flex",justifyContent:"space-between",backgroundColor:"#14A44D",borderRadius:"10px"}}>
              <h5>New User</h5>
              <Link to="/register"> <Button  variant="info">Singup</Button></Link>
          </div> 
    </Container>
     
          
      {/* < >
          <div>
             <h3>thank for login {loginUser}</h3>
             <Button onClick={()=>setLogin(true)} >LOGOUT</Button>
          </div>
      </> */}
   
    </>
  )
}

export default Login
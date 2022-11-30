import React ,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import {addUser} from "../redux/Employeered"

function Registration() {
    const dispatch = useDispatch();
    const userList = useSelector((state)=>state.users.value);
   
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
  return (
    <Container style={{width:"400px"}} className="me-auto" >
        <Form className="my-5 p-3" style={{backgroundColor:"#54B4D3",borderRadius:"10px"}} >
         <h3>Registration Form</h3>
        <Form.Group className="mb-3 py-2" >
           <Form.Label style={{fontWeight:500}}>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name"  onChange={(event) => {setName(event.target.value);}} />
        </Form.Group>

        <Form.Group className="mb-3 py-2" >
            <Form.Label style={{fontWeight:500}}>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your Username"  onChange={(event) => {setUsername(event.target.value);}} />
        </Form.Group>

        <Button onClick={()=>{
           dispatch(
            addUser({
              id: userList[userList.length-1].id+1,
              name,
              username,
              })
          );
        }} >Add User</Button>
        </Form>
    </Container>
  )
}

export default Registration
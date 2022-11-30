import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteUser,updateUser} from '../redux/Employeered';
import {Form,Container,Button,Card,InputGroup,Row, Col} from "react-bootstrap";

const Footer = () => {
  const dispatch = useDispatch();
  const userList =useSelector((state)=>state.users.value);
  const [newUsername, setNewUsername] = useState("");
  
  return (
  <Container > 
   <Row >
      {userList.map((data)=>
       <Col xs={6} className="p-2" key={data.id}>
        <Card >
          <Card.Header as="h5"> {data.name}</Card.Header>
          <Card.Body>
          <Card.Title>{data.username} </Card.Title>

        <Form>   
        <InputGroup>
                  <Form.Control
                          type="text"
                          placeholder="New Username..."
                          onChange={(event) => {
                            setNewUsername(event.target.value);
                          }}
                        />
                    <Button variant="outline-secondary" onClick={()=>{
                      dispatch(updateUser({id:data.id,username:newUsername}))
                    }}>
                      update UN
                    </Button>
                    
                    <Button variant="outline-danger" onClick={()=>{
                      dispatch(deleteUser({id:data.id}));
                    }}>
                      Delete
                    </Button> 
          </InputGroup> 
          </Form> 
         </Card.Body> 
        </Card>
       </Col> 
      )}
   </Row>

    </Container>
  )
}

export default Footer

import React from "react";
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import  Container  from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { AiOutlineUserAdd,AiOutlineLogin} from 'react-icons/ai';
import {useSelector} from "react-redux";

function ResponsiveAppBar() {
  const value = useSelector((state)=>state.custom.c);
  const cart = useSelector((state)=>state.cart.cart);
 
   
   
  
  return (

   <Navbar sticky="top" variant="danger"  bg="warning" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#" style={{fontSize:"24px",fontWeight:"700"}} >🪐 Immortal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav  navbarScroll style={{ maxHeight: '100px' }} className="me-auto my-2 my-lg-0 " >
            <Link to="/" style={{textDecoration:"none",color:"black",margin:"5px"}} >Product </Link> 
           <Link  to="/footer" style={{textDecoration:"none",color:"black",margin:"5px"}}> Employees</Link>       
           <Link  to="/cart" style={{textDecoration:"none",color:"black",margin:"5px"}}>Cart</Link> <Badge bg="primary" style={{margin:"5px"}}>{cart.length || 0}</Badge>
        </Nav>
          <Link to="/register"><Button variant="info" className="me-2" ><AiOutlineUserAdd size={18} ></AiOutlineUserAdd> </Button></Link>
          <Link to="/login"> <Button variant="success"><AiOutlineLogin size={18}></AiOutlineLogin></Button></Link>
          </Navbar.Collapse>
      </Container>
   </Navbar>
 

  );
}
export default ResponsiveAppBar;
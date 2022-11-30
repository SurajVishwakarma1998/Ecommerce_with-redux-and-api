// src/pages/Cart.js
import React from 'react';
import { useSelector } from 'react-redux'
import {Row,Col}  from "react-bootstrap";
import { useDispatch } from 'react-redux';
import {Container,Card,Button}from "react-bootstrap";
import { removeToCart,increse,decrese} from '../redux/Cart';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { GiPriceTag } from 'react-icons/gi';
import {FcRating } from 'react-icons/fc';
import { BiCategory} from 'react-icons/bi';
import { AiOutlineMinusCircle,AiOutlinePlusCircle,AiFillDollarCircle} from 'react-icons/ai';


const Onecart = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return ( 
    <Container >
     <Row>
     <Col  >
                {cartItem.map((item) =>{
                  return (
                    
                  <Card key={item.id} className=' m-3 d-flex flex-row p-3'> 
                      <Container className='d-flex flex-column ' style={{width:"30%"}} >
                        <Container >
                          <Card.Img variant='top' src={item.image} style={{width:"180px",height:"250px",margin:"10px auto"}} />
                         </Container>
                         <Container className='d-flex flex-row mt-3' style={{justifyContent:" space-around"}}>
                             <AiOutlineMinusCircle size={28}  onClick={()=>dispatch(decrese(item.id))} />
                                    <span style={{width:"30px",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"#B2B2B2"}}>{item.quantity}</span>
                                <AiOutlinePlusCircle size={28} onClick={()=>dispatch(increse(item.id))} />     
                          </Container>
                      </Container>
                      <Container className='d-flex flex-column'>
                      <Card.Body>
                        <Card.Title>{item.title}  <Badge bg="success">{item.count-item.quantity} In Stock</Badge></Card.Title>
                            <Card.Text>{item.description} </Card.Text>
                      </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{fontWeight:"500"}} ><BiCategory size={20} color="#009EFF"/> {item.category}</ListGroup.Item>
                      <ListGroup.Item><GiPriceTag size={20} color="#FF5B00" /> ${item.price} per Unit  </ListGroup.Item>
                      <ListGroup.Item><FcRating size={20} /> rating : {item.rating}/5 </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                       <Button variant='danger' onClick={()=>dispatch(removeToCart(item.id))} >Remove from cart</Button>
                       <Button className='bg-info mx-1' ><AiFillDollarCircle size={20} color="#EB6440"/> Pay ${item.price*item.quantity} Now</Button>
                    </Card.Body>
                    </Container>
                  </Card>                        
                   )
                }               
                )}
                </Col>  
            </Row>
         </Container>
           
  )
}

export default Onecart;




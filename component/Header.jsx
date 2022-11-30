import React from 'react';
import { useDispatch } from 'react-redux';
import {Container,Card,Button}from "react-bootstrap";
import { removeToCart,increse,decrese} from '../redux/Cart';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { GiPriceTag } from 'react-icons/gi';
import {FcRating } from 'react-icons/fc';
import { BiCategory} from 'react-icons/bi';
import { AiOutlineMinusCircle,AiOutlinePlusCircle,AiFillDollarCircle} from 'react-icons/ai';



const Header = (props) => {
  const dispatch = useDispatch();
   const {key,id, image, title, price, quantity,count,description,category,rating} = props;
 
  return (
                <Card key={key} className=' m-3 d-flex flex-row p-3'> 
                      <Container className='d-flex flex-column ' style={{width:"30%"}} >
                        <Container >
                          <Card.Img variant='top' src={image} style={{width:"180px",height:"250px",margin:"10px auto"}} />
                         </Container>
                         <Container className='d-flex flex-row mt-3' style={{justifyContent:" space-around"}}>
                             <AiOutlineMinusCircle size={28}  onClick={()=>dispatch(decrese(id))} />
                                    <span style={{width:"30px",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"#B2B2B2"}}>{quantity}</span>
                                <AiOutlinePlusCircle size={28} onClick={()=>dispatch(increse(id))} />     
                          </Container>
                      </Container>
                      <Container className='d-flex flex-column'>
                      <Card.Body>
                        <Card.Title>{title}  <Badge bg="success">{count} In Stock</Badge></Card.Title>
                            <Card.Text>{description} </Card.Text>
                      </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{fontWeight:"500"}} ><BiCategory size={20} color="#009EFF"/> {category}</ListGroup.Item>
                      <ListGroup.Item><GiPriceTag size={20} color="#FF5B00" /> ${price} per Unit  </ListGroup.Item>
                      <ListGroup.Item><FcRating size={20} /> rating : {rating}/5 </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                       <Button variant='danger' onClick={()=>dispatch(removeToCart(id))} >Remove from cart</Button>
                       <Button className='bg-info mx-1' ><AiFillDollarCircle size={20} color="#EB6440"/> Pay ${price} Now</Button>
                    </Card.Body>
                    </Container>
                                       
         
{/* <h1>{item.title}</h1> */}

{/* <Header
  id={item.id}
  image={item.image}
  title={item.title}
  price={item.price} 
  quantity={item.quantity}
  count={item.count}
  description={item.description}
  category={item.category}
  rating={item.rating}
  quantity={item.quantity}
/> */}
</Card>  
  )
}

export default Header;
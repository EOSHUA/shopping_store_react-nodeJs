import {React, useContext, useEffect, useState} from "react";
import Items from "./Items";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardContext } from "./Layout";
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ItemLists() {


 const { cartItem, setCartItem } = useContext(CardContext);
 let [data, setData]=useState([])
 const {cat}=useParams();


  async function getData(){
  const data1= await axios.get(`https://jbh-mockserver.onrender.com/categories/${cat}`)
  .then(({data})=>setData(data))
 }


 useEffect(()=>{
getData();
 },[])

  return (
    <>
      <Container>
        <div style={{ width: "40%" }}>
          {/* <Form className='bg-warning p-5'> 
        <Row>
         <Col>
        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Example@email.com'></Form.Control>
              <Form.Text className='text-muted'>
                we'll never share you email address
              </Form.Text>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='password' placeholder='password'></Form.Control>
              
        </Form.Group>
        </Col>
        </Row>
      </Form>
      

      <Card className='mb-3 mt-4 ' >
          <Card.Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQXkwNbMyNDRmqBwLhNBsf1OQOxeWzDcf5v6rvMeAB97HGf-ysX_eGtmPTUUzowcfPCg&usqp=CAU'  width="100px" height="100px"></Card.Img>
            <Card.Body>
                <Card.Title>Card example</Card.Title>
                  <Card.Text>this is an example of react code
                    <Button type='button' className='mt-4 '>Click me</Button>
                  </Card.Text>
            </Card.Body>
      </Card>
      <Breadcrumb className='mt-3 '>
      <Breadcrumb.Item>test 1</Breadcrumb.Item>
      <Breadcrumb.Item>test 2</Breadcrumb.Item>
      <Breadcrumb.Item>test 3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant='primary' className='mt-5'>hi</Alert> */}
        </div>


        <div className="itemList">
          {data.map((fruit) => (
            <Items item={fruit} key={fruit.id}  />
          ))}
        </div>
      </Container>
    </>
  );
}

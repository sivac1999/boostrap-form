import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Login(){
    const {setusername,setproductprice,setproductquntity,setdescription,setprofile}=useContext(LoginContext)


    
    return(
        
        <Form  className="m-auto border border-primary  p-3   form" >
         <h1 className="">Product Datails</h1>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>ProductName</Form.Label> */}
        <Form.Control className="mt-5  p-3"  type="text" placeholder="Enter your product Name" 

            onChange={(event)=>{
                setusername(event.target.value)
            }} 
        />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>ProductPrice</Form.Label> */}
        <Form.Control className="mt-5 p-3" type="text" placeholder="Enter your product Price"
          
          onChange={(event)=>{
            setproductprice(event.target.value)
        }} 
         />
    </Form.Group>
         
    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>ProductQuntity</Form.Label> */}
        <Form.Control className="mt-5 p-3" type="text" placeholder="Enter your product quntity"

         
            onChange={(event)=>{
                setproductquntity(event.target.value)
            }} 
         />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Product Description</Form.Label> */}
        <Form.Control className="mt-5 p-3" type="text" placeholder="Enter your product description"

           
        onChange={(event)=>{
            setdescription(event.target.value)
        }} 
         />
    </Form.Group>

    <Button   className="mt-5 " variant="success"  onClick={()=>{
                setprofile(true)
            }}  >Submit</Button>{' '}
        </Form>
       
    )
}
export default Login
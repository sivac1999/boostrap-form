import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { LoginContext } from "./LoginContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Profile(){
    const {username,productprice,productquntity,descriptipn}=useContext(LoginContext)
    return(
        <Card  className="m-auto mt-3" style={{ width: '20rem' }}>
        <Card.Img variant="top" src="images/p.jpeg" />
        <Card.Body>
          <Card.Title>Product </Card.Title>
          <Card.Text className="fs-5 p-1">
               ProductName: {username}
          </Card.Text >
          <Card.Text className="fs-5 p-1">
               ProductPrice: {productprice}
          </Card.Text>
          <Card.Text className="fs-5 p-1">
             ProductQuntity:  {productquntity}
          </Card.Text>
          <Card.Text className="fs-5 p-1">
           Description:  {descriptipn}
          </Card.Text>

        </Card.Body>
        
      </Card>
    );
}
export default Profile
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';


const Home = () => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Explore some of our latest brand collections at your fingertips at just the 
          lowest possible prices!
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
    </>
    
    
  )
}

export default Home

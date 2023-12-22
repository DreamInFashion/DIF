import React from 'react'
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
=======
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Home = () => {
  return (

      <div>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="logo192.png" rounded />
        </Col>
        <Col xs={6} md={4}>
        <Image
          img src={"logo192.png"} alt="logo192.png" class="center"
          height={350}
          width={1600}
        />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
      </div>

>>>>>>> 44a207d07a72aca283e81975a70514532e806949
  )
}

export default Home

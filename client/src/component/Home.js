import React from 'react'
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

  )
}

export default Home

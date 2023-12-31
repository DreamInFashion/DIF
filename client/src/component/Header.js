import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import login from './login.css';
import { Button, Col, Form, Row } from "react-bootstrap";





const Header = () => {
    return (

        <>
            <Navbar bg="light" data-bs-theme="light" style={{border: '4px solid rgba(0, 0, 0, 0.5)',borderRadius:'10px'}}>
                <Container>
                    <div >

                        <h2 className='nt-2 h2_right' style={{ color: "#002147" }}><Nav.Link href="#home">Dream In Fashion</Nav.Link></h2>


                    </div>


                    <Nav className="">
                        <div>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </div>
                        <div>
                            <button type="button" class="btn btn-dark" size="lg">Dark</button>
                        </div>
                    </Nav>

                </Container>
            </Navbar>
            <div class="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div class="input_box">

                        <i class="fa-solid fa-user"></i>
                    </div>

                    <div class="input_box">

                        <i class="fa-solid fa-lock"></i>
                    </div>

                    <div class="remember_forgot">

                        <a href="#">Forgot password?</a>
                    </div>

                    <button class="btn" type="submit">Login</button>

                    <div class="register_link">
                        <p>Don't have an account?<a href="#">Register</a></p>
                    </div>
                </form>

                

            </div>
            <>
                <Button variant="info" style={{width:'200px',cursor:'pointer'}} size='lg'>Shop Now</Button>{' '}
                <Button variant="light" style={{width:'200px',cursor:'pointer'}} size='lg'>Deliver</Button>{' '}
                <Button variant="dark" style={{width:'200px',cursor:'pointer'}} size="lg">Scan any QR</Button>
            </>
        </>
    )
}

export default Header

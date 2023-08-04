import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Store from '../store/Store';

const Header = () => {
  const [loadStore,setLoadStore]=useState(false);
  const storeHandler=()=>{
    console.log("hello")
    setLoadStore(true);
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">SARA STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {!loadStore?(<Nav.Link href="#link"onClick={storeHandler}>Store</Nav.Link>):(<Store />)}
            
            
            <Nav.Link href="#link">About</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
      <Nav className="me-auto ms-2">
      <Nav.Link href="#cart" style={{ fontSize: '1.2rem' }}>Cart</Nav.Link> 
      </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

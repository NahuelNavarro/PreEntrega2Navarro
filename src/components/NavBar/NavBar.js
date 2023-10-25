import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";  
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useContext} from "react";
import { ColeccionContext } from "../../context/ColeccionContext";



const NavBar = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3" ><Link to="/ProductoFiltrado/electronics" style={{ textDecoration: 'none' }} >electronics</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/ProductoFiltrado/jewelery" style={{ textDecoration: 'none' }}>jewelery</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/ProductoFiltrado/men's clothing" style={{ textDecoration: 'none' }}>men's clothing</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/ProductoFiltrado/women's clothing" style={{ textDecoration: 'none' }}>women's clothing</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
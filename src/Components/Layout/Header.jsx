import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-color-black">
    <Container>
      <Navbar.Brand href="#home">Shop24</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/product">Product</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/list">List</Nav.Link>
          <Nav.Link as={Link} to="/admin/category/list">Categories</Nav.Link>
          
          
          
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
//   <div>
//     <nav>
//         <ul>
//         <li>
//             <Link to ="/">Home</Link>
//         </li>
//         <li>
//             <Link to ="/about">About</Link>
//         </li>
//         </ul>
//     </nav>
//   </div>
  )
}

export default Header
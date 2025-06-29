import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';


function NavBar() {
 let{id}= useParams()
  let navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Product</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick = {()=> navigate("/")} >Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link onClick = {()=> navigate("/cart/list")} >Cartlist</Nav.Link>
            <Nav.Link onClick ={()=>navigate("/newproduct")}>New Product</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
          <Button variant="contained" onClick={()=>navigate("/wishlist")} >{<FaCartPlus />}</Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

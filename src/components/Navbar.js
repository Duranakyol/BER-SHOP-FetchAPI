import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import Logo from "../assets/img/shop.png";

function BasicExample() {
  const state = useSelector((state) => state.handleCart);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Nav.Link className="navbar-brand fw-bold fs-4" to="/">
            <img className="myLogo" src={Logo} alt="" />
            BER SHOP
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="routers me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="buttons">
            <Nav.Link to="/login" className="btn">
              <i className="fa fa-sign-in me-1"></i> Login
            </Nav.Link>
            <Nav.Link to="/register" className="btn">
              <i className="fa fa-user-plus me-1"></i> Register
            </Nav.Link>
            <Nav.Link to="/cart" className="btn">
              <i className="fa fa-shopping-cart me-1"></i> Cart({state.length})
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

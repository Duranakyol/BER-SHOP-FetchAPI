import { Img } from "@chakra-ui/react";
import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "../assets/styles/Footer.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/img/shop.png";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footerRow">
        <Col className=" links">
          <Navbar.Brand href="/">
            <Img className="myLogo" src={Logo} />
          </Navbar.Brand>
          <div className="text">BER SHOP</div>
        </Col>
        <Col className="mittel">
          <h6>
            <FaHome size={20} style={{ marginRight: "2rem" }} />
            <span> Leipziger Straße 13, 14789 Berlin </span>
          </h6>
          <div>
            <h6>
              <FaPhone size={20} style={{ marginRight: "2rem" }} />
              <span> +49 176 458 843 25</span>
            </h6>
          </div>
          <div>
            <h6>
              <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
              <a href="mailto:ber_shop@gmail.com">ber_shop@gmail.com</a>
            </h6>
          </div>
        </Col>
        <Col className="rechts">
          <h5>Sie können uns unter diesem Link erreichen.</h5>
          <h6>Alle Rechte vorbehalten</h6>
          <div>
            <a href="https://www.instagram.com" target="blank">
              <FaInstagram />
            </a>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

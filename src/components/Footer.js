import { Img } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "react-bootstrap";
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
    <div className="footerRow">
      <div className="links">
        <Navbar.Brand href="/">
          <Img className="myLogo" src={Logo} />
        </Navbar.Brand>
        <div className="text">BER SHOP</div>
      </div>
      <div className="mittel">
        <h6>
          <FaHome size={20} style={{ marginRight: "2rem" }} />
          <span> Leipziger Straße 13, 14789/Berlin </span>
        </h6>
        <div>
          <h6>
            <FaPhone size={20} style={{ marginRight: "2rem" }} />
            <span> +4917645884325</span>
          </h6>
        </div>
        <div>
          <h6>
            <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
            <a href="mailto:ber_shop@gmail.com">ber_shop@gmail.com</a>
          </h6>
        </div>
      </div>
      <div className="rechts">
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
      </div>
    </div>
  );
}

export default Footer;

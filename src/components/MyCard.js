import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../assets/styles/MyCard.css";
import Shopping from "../assets/img/shopping.png";

function myCard() {
  return (
    <Card className="cardContainer">
      <Card.Img variant="top" src={Shopping} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>Sichere Einkauf!</Card.Title>
        <Card.Text>
          In unserem Page können Sie sichere und schneller einkaufen.
        </Card.Text>
        <Link to="/contact">
          <Button variant="primary">Contact</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default myCard;

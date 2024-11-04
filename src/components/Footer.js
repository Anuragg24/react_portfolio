import { Container, Row, Col } from "react-bootstrap";

import mainlogo from "../assets/img/main_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";


export const Footer = () => {
  return (
    <footer className="footer" style={{padding:"20px 0 20px 0"}}>
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={mainlogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/anurag-saraswat-/" target="_blank" rel="noopener noreferrer">
      <img src={navIcon1} alt="LinkedIn" />
    </a>
            
            </div>
            <p>Copyright 2024. Developed with ❤️ by Anurag on React.js</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

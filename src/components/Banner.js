import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [isVisible, setIsVisible] = useState(false); // Manage visibility state
  

  // Use effect to set visibility to true when the component mounts
  useEffect(() => {
    setIsVisible(true); // Set visibility to true when the component mounts

    
  }, []);

 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Anurag Saraswat`} </h1>
              <p style={{color:"white"}}>
                I am a passionate MERN stack developer and software developer with a strong foundation in C++, Python, and Java.
                With experience building full-stack applications, I specialize in crafting dynamic and responsive web solutions.
                My goal is to create efficient, scalable, and innovative software that meets user needs while keeping up with the latest technologies and industry trends.
              </p>
              <button onClick={() => window.open('https://drive.google.com/file/d/1wJNEBI3S7uqEnoyW773LNXWCFlYNjfHy/view?usp=sharing', '_blank')}>
                View my Resume <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={headerImg} alt="Header Img" />
          
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

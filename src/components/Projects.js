import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import event from "../assets/img/event.png";
import event2 from "../assets/img/event2.png";
import event3 from "../assets/img/event3.png";
import attendance from "../assets/img/attendance.webp";
import lpg from "../assets/img/lpg.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WEB Development",
      description: "Event listing/Booking",
      imgUrl: event,
    },
    {
      title: "WEB Development",
      description: "Event listing/Booking",
      imgUrl: event2,
    },
    {
      title: "WEB Development",
      description: "Event listing/Booking",
      imgUrl: event3,
    },
    
  ];
   const project2=[
    {
      title: "Java Netbeans",
      description: "Employee Attendance management system",
      imgUrl: attendance,
    },
   ];
   const project3=[
    {
      title: "IOT",
      description: "LPG Gas Leak detector",
      imgUrl: lpg,
    },
   ];

  return (
    <section className="project" id="projects">
      <Container>
  <Row>
    <Col size={12}>
      <TrackVisibility>
        {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
          <h2>Projects</h2>
         
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
              <Nav.Item>
                <Nav.Link eventKey="first">UniEvents</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second"> Netbeans</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">IOT</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
              <Tab.Pane eventKey="first">
                <p style={{ textAlign: "justify" }}>Centralized Event Management System using HTML, CSS, JS, Bootstrap, MySQL, and PHP for managing university event listings and bookings, providing a streamlined user interface for viewing, listing, and reserving events.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <p style={{ textAlign: "justify" }}>Employee Attendance Management System | Netbeans Framework,
java , MySQL 
⋄ track daily student attendance and to to automate the traditional method
of taking attendance.</p>
                <Row className="justify-content-center" >
                  {
                    project2.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p style={{ textAlign: "justify" }}>IoT-based LPG gas leak detector | 
Nano Arduino
⋄ Mini model based on Nano Arduino which detects any leakage in gas and
triggers an alarm.
</p>
                <Row className="justify-content-center">
                  {
                    project3.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>}
      </TrackVisibility>
    </Col>
  </Row>
</Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

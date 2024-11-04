import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import colorSharp from "../assets/img/color-sharp.png";
import exp from "../assets/img/exp.jpeg";
import logo from "../assets/img/logo.jpeg";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2 style={{ margin:"0px 0px 25px" }}>Work Experience</h2>

                <MDBRow className="justify-content-center">
                  <MDBCol
                    md="6"
                    sm="12"
                    className="d-flex justify-content-center"
                  >
                    <MDBCard className="h-100 position-relative">
                      <MDBCardImage
                        src={exp}
                        alt="..."
                        position="top"
                        className="card-image"
                      />
                      <div className="logo-container">
                        <img
                          src={logo} // Replace with your logo image path
                          alt="Logo"
                          className="logo-image"
                        />
                      </div>
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText style={{ color: "#000" }}>
                          <h1>Web /React Native Developer Intern</h1>
                          Proactively contributed to real-time projects,
                          demonstrating hands-on skills in Bootstrap, HTML, CSS,
                          JavaScript, PHP, React Native, and integration using
                          various technologies, and fostering effective client
                          communication and teamwork within project teams.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </>
  );
};

export default WorkExperience;

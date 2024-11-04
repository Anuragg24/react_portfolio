
import mern2 from "../assets/img/mern2.webp";
import html from "../assets/img/html.webp";
import css from "../assets/img/css.webp"
import js from "../assets/img/js.webp"
import python from "../assets/img/python.webp"
import java from "../assets/img/java.webp"
import clogo from "../assets/img/c-logo.svg"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                        Exploring the infinite possibilities of diverse technology frameworks.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img  src={mern2} alt="Image" />
                                <h5>MERN STACK</h5>
                            </div>
                            <div className="item">
                                <img  src={html} alt="Image" />
                                <h5>HTML 5</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={clogo} alt="Image" />
                                <h5>C++</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
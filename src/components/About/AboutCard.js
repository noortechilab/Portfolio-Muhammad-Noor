import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Noor </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I am frontend developer with 9 mounths of strong experience
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className="text-white">
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer text-white">
            Muhammad Noor
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

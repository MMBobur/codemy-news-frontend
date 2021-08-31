import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ads from "../../images/ads2.png";
import "./RightMenu.css";

function Img() {
  return (
    <>
      <Container>
        <Image src={ads} className="ads" />
      </Container>
    </>
  );
}

export default Img;

import React, { useEffect, useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { GrGooglePlus } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";

import { Col, Row } from "react-bootstrap";

function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/category")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
      <Row className="footer">
        <Col className="box box1" xs={12} md={3} sm={6}>
          <h1>
            WEB<strong>MAG</strong>
          </h1>
          <h5>Privacy Policy Advertisement</h5>
          <p>
            © Copyright ©2021 All rights reserved | This template is made with{" "}
            <AiOutlineHeart /> by Colorlib
          </p>
        </Col>
        <Col className="box box2" xs={12} md={3} sm={6}>
          <h4>About Us </h4>
            <p>
          <Link className="f-link" to="/about">
              About Us
          </Link>
            </p>
          <p>
            <Link className="f-link" to="/">
              Join Us
            </Link>
          </p>
          <p>
            <Link className="f-link" to="/">
              Contacts
            </Link>
          </p>
        </Col>
        <Col className="box box3" xs={12} md={3} sm={6}>
          <h4>Categories </h4>
          <ul>
            {data.map((item) => (
              <li style={{ listStyle: "none" }} key={item.id}>
                <p className="f-link">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </Col>
        <Col className="box box4" xs={12} md={3} sm={6}>
          <h4>Join Our Newsletter </h4>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Enter your email"
            />
            <button type="submit" className="searchButton">
              <FaTelegramPlane />
            </button>
          </div>
          <div className="icon-box">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              {" "}
              <GrTwitter />
            </div>
            <div className="icon">
              {" "}
              <GrGooglePlus />
            </div>
            <div className="icon">
              {" "}
              <FaPinterestP />
            </div>
          </div>
        </Col>
      </Row>
  );
}

export default Footer;

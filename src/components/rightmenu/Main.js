import React, { useState, useEffect } from "react";
import service from "../../utils/service";
import Img from "./Image";
import Categories from "./Categories";
import { Container, Row } from "react-bootstrap";
import "./RightMenu.css";

function Main() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    service
      .getAll("news/group")
      .then((res) => {
        setNewsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Img />
        </Row>
        <Row>
          <Categories newsData={newsData} />
        </Row>
      </Container>
    </>
  );
}

export default Main;

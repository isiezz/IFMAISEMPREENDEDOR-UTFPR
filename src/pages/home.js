import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import IFMAIS from "../img/IFMAIS logo.png";
import UTFPR from "../img/UTFPR logo.png";
import Sprint from "../img/Sprint CM.png";

export const Home = () => {
  return (
    <section className="home" id="home">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="banner">
              <img src={IFMAIS} alt="banner" />
            </div>
          </Col>
          <Row className="apoio">
            <Col lg={1}>
              <div className="utfpr-logo">
                <img src={UTFPR} alt="utfpr-logo" />
              </div>
            </Col>
            <Col lg={1}>
              <div className="sprint-logo">
                <img src={Sprint} alt="sprint-logo" />
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

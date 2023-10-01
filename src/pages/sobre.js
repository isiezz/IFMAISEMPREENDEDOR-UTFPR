import { Container, Row, Col } from "react-bootstrap";
import delete3 from "../img/delete3.png";

export const Sobre = () => {
    return (
      <section className="sobre" id="sobre">
        <Container fluid>
            <Row className="title">

                <Col md="auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="73" viewBox="0 0 50 73" fill="none">
                    <path d="M24.1415 34.9494L2.82843 13.6364L13.6364 2.82843L47.1716 36.3636L13.6364 69.8988L2.82843 59.0909L24.1415 37.7779L25.5557 36.3636L24.1415 34.9494Z" fill="#389A4C" stroke="#EDE9DF" stroke-width="4"/>
                </svg>
                </Col>

                <Col>
                <h1>sobre</h1>
                </Col>

            </Row>

            <Row>
            <div className="void">
              <img src={delete3} />
              </div>
            </Row>
            
        </Container>
    </section>
  );
};
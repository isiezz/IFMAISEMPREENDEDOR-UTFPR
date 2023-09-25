import { Container, Row, Col } from "react-bootstrap";
import NewHappen from "../img/New Happen.png";
import Quintal from "../img/Quintal.png";
import Yogin from "../img/Yogin Life.png";
import Mecanica from "../img/Mecanica Andrade.png";
import Caule from "../img/Caule.png";
// import styles from "../style/empreendimentos.module.css";

export const Empreendimentos = () => {
  return (
    <section className="empreendimentos" id="empreendimentos">
        <Container fluid>
          <Row>
            <Col md="auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="73" viewBox="0 0 50 73" fill="none">
                <path d="M24.1415 34.9494L2.82843 13.6364L13.6364 2.82843L47.1716 36.3636L13.6364 69.8988L2.82843 59.0909L24.1415 37.7779L25.5557 36.3636L24.1415 34.9494Z" fill="#389A4C" stroke="#EDE9DF" stroke-width="4"/>
            </svg>
            </Col>
            <Col>
            <h1>empreendimentos</h1>
            </Col>
          </Row>
            <Row className="slider">
                <ul className="brands">
                  <li className="brand-logo"><img src={NewHappen} /></li>
                    <li className="brand-logo"><img src={Quintal} /></li>
                    <li className="brand-logo"><img src={Yogin} /></li>
                    <li className="brand-logo"><img src={Mecanica} /></li>
                    <li className="brand-logo"><img src={Caule} /></li>
                </ul>
            </Row>
        </Container>
    </section>
  );
};

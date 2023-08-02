import { Container, Row, Col } from "react-bootstrap";
import delete1 from "../img/delete1.png";

export const PDCA = () => {
  return (
    <section className="pdca" id="pdca">
      <Container fluid>
        <Row>
          <div className="void">
            <img src={delete1} />
          </div>
        </Row>
      </Container>
    </section>
  );
};

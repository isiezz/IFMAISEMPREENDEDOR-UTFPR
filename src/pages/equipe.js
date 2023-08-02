import { Container, Row, Col } from "react-bootstrap";
import delete2 from "../img/delete2.png";

export const Equipe = () => {
  return (
    <section className="equipe" id="equipe">
      <Container fluid>
        <Row>
          <div className="void">
            <img src={delete2} />
          </div>
        </Row>
      </Container>
    </section>
  );
};

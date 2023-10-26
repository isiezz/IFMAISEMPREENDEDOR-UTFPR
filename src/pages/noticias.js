import { Container, Row, Col } from "react-bootstrap";
import noticia from "../img/noticia.png";

export const Noticias = () => {
  return (
    <section className="noticias" id="noticias">
      <Container>
        <Row>
          <Col lg={8}>
            <h2>
            Vantagens do diagrama de Ishikawa:
            </h2>
            <p>
              <ol>

                <li>Visão clara:</li>
                <ul>
                  <li>Fornece uma representação visual clara das causas, facilitando a comunicação e a compreensão.</li>
                </ul>

                <li>Colaboração:</li>
                <ul>
                  <li>Promove a colaboração entre os membros da equipe, fornecendo uma estrutura organizacional para discussões.</li>
                </ul>

                <li>Identifica a causa raiz:</li>
                <ul>
                  <li>Ajuda a identificar as causas raízes, permitindo soluções mais eficazes.</li>
                </ul>

                <li>Melhoria contínua:</li>
                <ul>
                  <li>Diagramas de Ishikawa são integrados à filosofia de melhoria contínua e suportam o ciclo PDCA (Plan(Planejar), Do(Fazer), Check(Checar), Action(Agir)).</li>
                </ul>
              </ol>
            </p>

            {/* <div className="text-center">
                <a href="" target="_blank">
                  <button type="button" class="btn btn-light">saiba mais</button>
                </a>
              </div> */}
          </Col>
          <Col lg={4}>
            <img src={noticia} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

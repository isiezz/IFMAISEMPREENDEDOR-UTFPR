import { Container, Row, Col } from "react-bootstrap";
import layeredwaves from "../img/layered-waves-haikei.svg";

export const Sobre = () => {
    return (
      <section className="sobre" id="sobre">
        <Container fluid>
            <Row>

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

              <Col>
                <p>O Programa IF Mais Empreendedor Nacional 2023 é <br></br>uma iniciativa importante para o desenvolvimento <br></br>do empreendedorismo no Brasil. Ao atender micro, <br></br>pequenas empresas e empreendedores individuais, <br></br>o programa visa contribuir para o crescimento <br></br>econômico, a geração de emprego e renda e a <br></br>melhoria da qualidade de vida da população.</p>
                <p>As micro, pequenas empresas e empreendedores <br></br>individuais representam uma parcela significativa <br></br>da economia brasileira. Elas são responsáveis por <br></br>mais de 90% dos empregos e por mais de 50% do <br></br>PIB do país. No entanto, esses empreendimentos <br></br>também enfrentam diversos desafios.</p>
              </Col>

              <Col>
              <p>O Programa visa, portanto, contribuir para o enfrentamento <br></br>desses desafios, por meio do oferecimento de capacitações, <br></br>consultorias e serviços de apoio a esses empreendimentos. <br></br>Os projetos selecionados pelo programa deverão utilizar <br></br>metodologias inovadoras e práticas de gestão modernas, <br></br>como o processo PDCA.</p>
              <p>A aplicação do processo PDCA às micro, pequenas <br></br>empresas e empreendedores individuais pode ajudá-los a:</p>
              <p>
                <ul>
                  <li>Melhorar a eficiência e eficácia dos seus processos;</li>
                  <li>Reduzir custos;</li>
                  <li>Aumentar a produtividade;</li>
                  <li>Melhorar a qualidade dos produtos e serviços;</li>
                  <li>Aumentar a satisfação dos clientes;</li>
                  <li>Melhorar a competitividade.</li>
                </ul>
              </p>
              </Col>

            </Row>
            
        </Container>
    </section>
  );
};
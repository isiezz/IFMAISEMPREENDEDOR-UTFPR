import { Container, Row, Col } from "react-bootstrap";
import noticia from "../img/noticia.png";

export const Noticias = () => {
  return (
    <section className="noticias" id="noticias">
      <Container>
        <Row>
            <Col lg={8}>
              <h2>Noticias</h2>
              <p>A Feira do Empreendedor 2023 em Curitiba, promovida pelo Sebrae/PR de 14 a 17 de setembro, é um evento essencial para empreendedores. Oferece capacitação abrangente em áreas como marketing, finanças e liderança, com palestras de especialistas, incluindo Zico. Haverá experiências interativas em lojas conceito, desafios empresariais e oportunidades de networking.</p>
              <p>Os participantes podem simplificar o planejamento estratégico com o "Canvas Express". Mais de 600 empresas apresentarão produtos, incluindo inovações como um equipamento de hidrogênio para carros. O evento oferece rodadas de negócios para pequenas empresas locais. A Feira do Empreendedor 2023 é gratuita e acessível a todos os interessados em impulsionar seus negócios.</p>
              <p>Não perca esta oportunidade de aprendizado e crescimento!</p>
            </Col>
            <Col lg={4}>
              <img src={noticia} />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

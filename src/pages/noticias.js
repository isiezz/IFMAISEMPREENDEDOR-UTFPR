import { Container, Row, Col } from "react-bootstrap";
import noticia from "../img/noticia.png";

export const Noticias = () => {
  return (
    <section className="noticias" id="noticias">
      <Container>
        <Row>
            <Col lg={8}>
              <h2>Feira do Empreendedor 2023 sediada em Curitiba</h2>
              <p>A Feira do Empreendedor 2023 em Curitiba, promovida pelo Sebrae/PR de 14 a 17 de setembro, é um evento essencial para empreendedores. Oferece capacitação abrangente em áreas como marketing, finanças e liderança, com palestras de especialistas, incluindo o ex-jogador de futebol Zico. Há experiências em lojas conceito, desafios empresariais e networking.</p>
              <p>Mais de 600 empresas apresentarão produtos, incluindo inovações como um equipamento de hidrogênio para carros. Haverá quatro lojas interativas: cafeteria, moda, petshop e salão de beleza, com visitas guiadas para entender a operação. O evento oferece rodadas de negócios para pequenas empresas locais.</p>
              <p>Não perca essa oportunidade de aprendizado e crescimento!</p>

              <h3>quinta-feira (14) a domingo (17), das 14h às 22h, no Viasoft Experience, em Curitiba</h3>

              <div className="text-center">
                <a href="https://www.sebraepr.com.br/feiradoempreendedor/" target="_blank">
                  <button type="button" class="btn btn-light">saiba mais</button>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <img src={noticia} />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import noticia from "../img/noticia.png";

export const Noticias = () => {
  return (
    <section className="noticias" id="noticias">
      <Container>
        <Row>
          <Col lg={8}>
            <h2>
              7 filmes inspiradores para empreendedores: <br></br>lições de sucesso na tela!
            </h2>
            <p>
              {" "}
              Os filmes têm o poder mágico de nos transportar para mundos
              emocionantes, despertar paixões e inspirar empreendimentos na vida
              real. Em homenagem ao Dia do Empreendedor, que cai no dia 5 de
              outubro, reunimos uma lista imperdível com sete filmes repletos de
              lições valiosas para quem sonha em construir seu próprio império.
              Confira!
            </p>
            <p>
              <ol>
                <li>A Rede Social (2010)</li>
                <li>Joy: O Nome do Sucesso (2015)</li>
                <li>À procura da Felicidade (2006)</li>
                <li>Steve Jobs (2015)</li>
                <li>O Menino que Descobriu o Vento (2019)</li>
                <li>Walt antes de Mickey (2015)</li>
                <li>Fome de Poder (2016)</li>
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

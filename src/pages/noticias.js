import { Container, Row, Col } from "react-bootstrap";
import noticia from "../img/noticia.png";

export const Noticias = () => {
  return (
    <section className="noticias" id="noticias">
      <Container>
        <Row>
          <Col lg={8}>
            <h2>
            Inovação e Empreendedorismo: Pontal do Paraná brilha em encontro estadual. 
            </h2>
            <p>
            Pontal do Paraná se destacou no Encontro Estadual de Políticas Públicas, que foi realizado em Foz do Iguaçu e foi reconhecido por suas iniciativas inovadoras. O município ficou conhecido por contratar microempreendedores individuais (MEIs) para reformar equipamentos públicos, roçar espaços públicos e fabricar uniformes escolares para o ano letivo de 2024. 
            </p>
            <p>
            Além disso, os pescadores foram capacitados para atuar no Mercado de Peixe de Pontal do Sul. O objetivo do evento, promovido pelo Sebrae Paraná, foi fomentar a troca de experiências entre os municípios e o desenvolvimento de políticas públicas para promover o empreendedorismo.
            </p>
            <p>
            Autoridades locais como o vereador e Presidente do Conselho Municipal de Desenvolvimento Econômico, Ezequiel Tavares Alves, a procuradora da Câmara de Comércio drª Joyce Maus e o agente de desenvolvimento da Sala do Empreendedor, Antônio Cruz, também estiveram presentes.
            </p>
            <p>
            Três dias de palestras e debates abordaram temas chave como acesso a serviços financeiros, compras públicas, educação para o empreendedorismo, inovação, simplificação e desburocratização. Também merecem destaque os workshops práticos e criativos focados na construção de um ambiente de negócios. 
            </p>
            <p>
            A participação ativa de Pontal do Paraná fortalece o compromisso do município em promover a inovação e o empreendedorismo, moldando um futuro promissor para a comunidade local.
            </p>

            {/* <div className="text-center">
                <a href="" target="_blank">
                  <button type="button" class="btn btn-light">saiba mais</button>
                </a>
              </div> */}
          </Col>
          <Col lg={4}>
            <img src={noticia} alt="noticia"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

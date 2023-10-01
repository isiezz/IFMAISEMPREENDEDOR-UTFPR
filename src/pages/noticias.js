import { Container, Row, Col } from "react-bootstrap";
import noticia from "../img/noticia.png";

export const Noticias = () => {
  return (
    <section className="noticias" id="noticias">
      <Container>
        <Row>
            <Col lg={8}>
              <h2>Você sabia?</h2>
              <p>A inovação é uma peça-chave para o sucesso dos pequenos empreendedores. Muitas vezes, ela não requer a criação de algo completamente novo, mas sim a capacidade de aprimorar produtos ou processos já existentes. A compreensão de que inovar não se limita a introduzir algo revolucionário, mas também a encontrar maneiras criativas de melhorar o que já está presente, é fundamental.</p>
              <p>Nos mercados cada vez mais dinâmicos e competitivos de hoje, a inovação pode ser o fator diferenciador essencial. Os empreendedores que conseguem se destacar têm maiores chances de prosperar. Isso pode envolver a otimização de produtos existentes para atender melhor às necessidades dos clientes, a melhoria de processos para aumentar a eficiência ou até mesmo a reestruturação de modelos de negócios para se adaptar às demandas do mercado.</p>
              <p>Muitas vezes, pequenas melhorias incrementais podem gerar impactos significativos a longo prazo. A habilidade de identificar oportunidades de inovação em seu nicho de mercado pode ser a diferença entre o sucesso e o fracasso.</p>
              <p>Não se trata apenas de criar algo novo, mas de constantemente buscar maneiras de aprimorar o que já existe, seja em produtos ou processos, para alcançar níveis mais elevados de sucesso nos negócios.</p>

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

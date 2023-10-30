import { Container, Row, Col } from "react-bootstrap";
import noticia from "../img/noticia.png";

export const Noticias = () => {
  return (
    <section className="noticias" id="noticias">
      <Container>
        <Row>
          <Col lg={12}>

          <h2>
              O poder do diagrama de Ishikawa: uma ferramenta essencial para análise de causa e efeito.
            </h2>
            <p>
            O Diagrama de Ishikawa, também chamado de diagrama de espinha de peixe ou de causa e efeito, é uma ferramenta essencial para analisar as causas de problemas em ambientes empresariais e de produção. Desenvolvido por Kaoru Ishikawa, este método se tornou fundamental para o controle de qualidade e a melhoria contínua. Ele organiza as diversas causas de um problema em categorias representadas como espinhos em uma espinha de peixe, permitindo uma análise mais aprofundada das causas e seus possíveis efeitos. Isso ajuda a identificar a causa raiz de problemas e implementar melhorias significativas. Pode ser feito da seguinte forma:
            </p>
            <p>
              <ol>

                <li>Identificando o problema:</li>
                <ul>
                  <li>Definir claramente o problema a ser analisado. Isso é muito importante para garantir que seu diagrama de Ishikawa seja eficaz.</li>
                </ul>

                <li>Criando a Espinha:</li>
                <ul>
                  <li>Desenhe uma linha horizontal para representar a espinha e rotule-a para indicar o problema identificado.</li>
                </ul>

                <li>Definindo as causas:</li>
                <ul>
                  <li>Desenhe linhas perpendiculares a Espinha representando as categorias das causas (pessoas, processos, equipamentos, etc.).</li>
                </ul>

                <li>Identificação de causas secundárias:</li>
                <ul>
                  <li>Para cada categoria, identifique e liste quaisquer causas secundarias que possam estar contribuindo para o problema.</li>
                </ul>

                <li>Análise detalhada:</li>
                <ul>
                  <li>Explore detalhadamente cada causa secundária e utilize ferramentas como o método dos 5 Porquês para aprofundar a sua análise.</li>
                </ul>

                <li>Priorize:</li>
                <ul>
                  <li>Priorize as causas mais impactantes que precisam ser abordadas, considerando os recursos disponíveis e o potencial impacto positivo caso essas causas sejam solucionadas.</li>
                </ul>

              </ol>
            </p>


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

          {/* <Col lg={4}>
            <img src={noticia} />
          </Col> */}

        </Row>
      </Container>
    </section>
  );
};

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import IFMAIS from "../img/IFMAIS logo.png";
import UTFPR from "../img/UTFPR logo.png";
import Sprint from "../img/Sprint CM.png";
import Equipe from "../img/equipe.png";
import Logo from "../img/IF logo.png";
import Instagram from "../img/Instagram icon.png";

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      {isMobile && (
        <>
          <button className="navbar-toggle" onClick={toggleNavbar}>
            ☰
          </button>
          <nav className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
            <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" /></a>
            <div className="navbar-nav">
              <a className="nav-link navbar-link" href="#home" onClick={closeNavbar}>Home</a>
              <a className="nav-link navbar-link" href="#sobre" onClick={closeNavbar}>Sobre</a>
              <a className="nav-link navbar-link" href="#pdca" onClick={closeNavbar}>PDCA</a>
              <a className="nav-link navbar-link" href="#equipe" onClick={closeNavbar}>Equipe</a>
              <a className="nav-link navbar-link" href="#empreendimentos" onClick={closeNavbar}>Empreendimentos</a>
              <a className="nav-link navbar-link" href="#noticias" onClick={closeNavbar}>Notícias</a>
              <a className="nav-link navbar-link" href="#incubadora" onClick={closeNavbar}>Incubadora</a>
            </div>
            <span className="navbar-text">
              <div className="instagram-projeto">
                <a href="#"><img src={Instagram} alt="Instagram" /></a>
              </div>
            </span>
          </nav>
          <div className={`navbar-overlay ${isNavbarOpen ? 'visible' : ''}`} onClick={closeNavbar}></div>
        </>
      )}

      <section className="home" id="home">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={12} md={8} xl={7}>
              <div className="banner">
                <img src={IFMAIS} alt="banner" />
              </div>
            </Col>
            <Row className="apoio">
              <Col lg={1}>
                <div className="utfpr-logo">
                  <img src={UTFPR} alt="utfpr-logo" />
                </div>
              </Col>
              <Col lg={1}>
                <div className="sprint-logo">
                  <img src={Sprint} alt="sprint-logo" />
                </div>
              </Col>
            </Row>
          </Row>
        </Container>

        <div className="equipe">
          <img src={Equipe} alt="equipe" />
        </div>
      </section>
    </>
  );
};

import "./style/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TopNavbar } from "./pages/navbar";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { PDCA } from "./pages/pdca";
import { Equipe } from "./pages/equipe";
import { Empreendimentos } from "./pages/empreendimentos";
import { Noticias } from "./pages/noticias";
import { Incubadora } from "./pages/incubadora";

function App() {
  return (
    <html lang="pt-BR">
      <div className="App">
        <TopNavbar />
        <Home />
        <Sobre />
        <PDCA />
        <Equipe />
        <Empreendimentos />
        <Noticias />
        <Incubadora />
      </div>
    </html>
  );
}

export default App;

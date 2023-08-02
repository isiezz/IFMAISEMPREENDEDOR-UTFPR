import './style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavbar } from "./pages/navbar";
import { Home } from "./pages/home";
import { Sobre } from './pages/sobre';
import { PDCA } from './pages/pdca';
import { Equipe } from './pages/equipe';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Home />
      <Sobre />
      <PDCA />
      <Equipe />
    </div>
  );
}

export default App;
import './style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavbar } from "./pages/navbar";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Home />
    </div>
  );
}

export default App;
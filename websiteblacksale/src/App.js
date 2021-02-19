import './assets/css/App.css';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Inicio from './Componentes/Inicio';
import Productos from './Componentes/Productos';
import Contacto from './Componentes/Contacto';
import Promociones from './Componentes/Promociones';
import NuevoIngreso from './Componentes/NuevoIngreso';
import Detalle from './Componentes/Detalle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/productos" exact>
            <Productos/>
          </Route>
          <Route path="/nuevoingreso" exact>
            <NuevoIngreso/>
          </Route>
          <Route path="/promociones" exact>
            <Promociones/>
          </Route>
          <Route path="/contacto" exact>
            <Contacto/>
          </Route>
          <Route path="/detalle" exact>
            <Detalle/>  
          </Route>
          <Route path="/" exact>
            <Inicio/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

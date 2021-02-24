import './assets/css/App.css';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Inicio from './Componentes/Inicio';
import Productos from './Componentes/Productos';
import Contacto from './Componentes/Contacto';
import Promociones from './Componentes/Promociones';
import NuevoIngreso from './Componentes/NuevoIngreso';
import Detalle from './Componentes/Detalle';
import UsuarioMenu from './Componentes/UsuarioMenu';
import ActualizarProducto from './Componentes/ActualizarProducto';
import AgregarProducto from './Componentes/AgregarProducto';
import ConfCuenta from './Componentes/ConfCuenta';
import EliminarProducto from './Componentes/EliminarProducto';
import ModificarUsuario from './Componentes/ModificarUsuario';
import RecuperarCuenta from './Componentes/RecuperarCuenta';

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
          <Route path="/recuperar" exact>
            <RecuperarCuenta/>
          </Route>
          <Route path="/agregarproducto" exact>
            <AgregarProducto/>
          </Route>
          <Route path="/actualizarproducto" exact>
            <ActualizarProducto/>
          </Route>
          <Route path="/modificarusuario" exact>
            <ModificarUsuario/>
          </Route>
          <Route path="/eliminarproducto" exact>
            <EliminarProducto/>
          </Route>
          <Route path="/confcuenta" exact>
            <ConfCuenta/>
          </Route>
          <Route path="/menu" exact>
            <UsuarioMenu/>
          </Route>
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

import React, {useState} from 'react';
import '../assets/css/App.css';

function Navbar(){
    /* Es un estado en el que se encuentra para que aparezca el boton cuando la pantalla este menor ancho */
    const[showLinks, setShowLinks] = useState(false);
    return(
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}> 
                    <a href="/inicio">Inicio</a>
                    <a href="/Productos">Productos</a>
                    <a href="/NuevoIngreso">Nuevo Ingreso</a>
                    <a href="/Promociones">Promociones</a>
                    <a href="/Contacto">Contacto</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}> Open</button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search..."></input>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Navbar;

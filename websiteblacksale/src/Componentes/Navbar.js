import React, {useState} from 'react';
import '../assets/css/App.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';

function Navbar(){
    /* Es un estado en el que se encuentra para que aparezca el boton cuando la pantalla este menor ancho */
    const[showLinks, setShowLinks] = useState(false);
    return(
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}> 
                    <a href="/">Inicio</a>
                    <a href="/Productos">Productos</a>
                    <a href="/Productos">Nuevo Ingreso</a>
                    <a href="/Productos">Promociones</a>
                    <a href="/Contacto">Contacto</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                    <ReorderIcon/>
                </button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Producto que desea..."></input>
                <a href="/Productos"><button>
                    <SearchIcon/>
                </button></a>
            </div>
        </div>
    )
}

export default Navbar;

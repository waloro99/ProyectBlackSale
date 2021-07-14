import React from 'react';
import '../assets/css/UsuarioMenu.css';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo from '../assets/images/logo horizontal.png';
import logo2 from '../assets/images/Logo.jpg';
import { Link } from 'react-router-dom';
import Login from './login';

function UsuarioMenu(){
    return(
        <div className="main-menu">
            <div className="content-wrap">
                <div className="leftSiteU">
                    <div className="logoC">
                        <img src={logo}></img>
                    </div>                    
                    <h2>Inicio <MayorQue/> Usuario</h2>
                    <div className="logo2C">
                        <img src={logo2}></img>
                    </div>                 
                </div>
                <div className="rightSiteC">
                    <div className="header">
                        <h2>Elige una opción:</h2>
                        <h3>Cuenta: <Link to="/"><Login/></Link></h3>
                    </div>
                    <div className="menuM">
                        <div className="cont-menu">
                            <div className="izquierdaM">
                            <Link to="/agregarproducto"><button className="agregar"><h3>&nbsp;&nbsp;&nbsp;&nbsp; Agregar Producto</h3></button></Link>
                            <Link to="/modificarusuario"><button className="modificar"><h3>&nbsp;&nbsp;&nbsp;&nbsp; Modificar Usuario</h3></button></Link>
                            </div>
                            <div className="derechaM">
                                <div className="arribaM">
                                <Link to="/agregarproducto"><button className="actualizar"><h3>&nbsp;&nbsp; Actualizar Producto</h3></button></Link>
                                <Link to="/agregarproducto"><button className="eliminar"><h3>&nbsp;&nbsp; Eliminar Producto</h3></button></Link>
                                </div>
                                <div className="abajoM">
                                <button className="configurar"><h3>&nbsp;&nbsp;&nbsp;&nbsp;BLACK SALE </h3></button>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UsuarioMenu;
import React from 'react';
import '../assets/css/UsuarioMenu.css';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo from '../assets/images/logo horizontal.png';
import logo2 from '../assets/images/Logo.jpg';

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
                        <h3>Cuenta: admin</h3>
                    </div>
                    <div className="menuM">
                        <div className="cont-menu">
                            <div className="izquierdaM">
                            <a href="/agregarproducto"><button className="agregar"><h3>&nbsp;&nbsp;&nbsp;&nbsp; Agregar Producto</h3></button></a>
                            <a href="/modificarusuario"><button className="modificar"><h3>&nbsp;&nbsp;&nbsp;&nbsp; Modificar Usuario</h3></button></a>
                            </div>
                            <div className="derechaM">
                                <div className="arribaM">
                                <a href="/actualizarproducto"><button className="actualizar"><h3>&nbsp;&nbsp; Actualizar Producto</h3></button></a>
                                <a href="/eliminarproducto"><button className="eliminar"><h3>&nbsp;&nbsp; Eliminar Producto</h3></button></a>
                                </div>
                                <div className="abajoM">
                                <a href="/confcuenta"><button className="configurar"><h3>&nbsp;&nbsp;&nbsp;&nbsp; Configuración de Cuenta</h3></button></a>
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
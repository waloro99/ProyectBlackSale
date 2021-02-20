import React from 'react';
import '../assets/css/AgregarProducto.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo2 from '../assets/images/Logo.jpg';

function AgregarProducto(){
    return(
        <div className="main-contacto">
            <div className="content-wrap">
                <div className="leftSiteAP">
                    <div className="logoC">
                        <img src={logo}></img>
                    </div>                    
                    <h2>Inicio <MayorQue/> Usuario <MayorQue/> Agregar Producto</h2>
                    <div className="logo2C">
                        <img src={logo2}></img>
                    </div>                   
                </div>
                <div className="rightSiteAP">       
                    <div className="header">
                        <h2>Completa el formulario:</h2>
                        <h3>Cuenta: admin</h3>
                    </div>           
                </div>
            </div>
        </div>
    )
}


export default AgregarProducto;
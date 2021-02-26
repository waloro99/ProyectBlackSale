import React from 'react';
import '../assets/css/Productos.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';

function Productos(){
    return(
    <div className="main-productos">
        <div className="content-wrap">
            <div className="leftSiteP">
                <div className="logoC">
                    <img src={logo}></img>
                </div>                    
                <h2>Inicio <MayorQue/> Productos</h2>
                <div className="list">
                </div>                   
            </div>
            <div className="rightSiteP">       
                <h2>hola</h2>
            </div>
        </div>
    </div>
    )
}


export default Productos;
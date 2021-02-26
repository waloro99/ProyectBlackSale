import React from 'react';
import '../assets/css/Productos.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';

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
                <div className="Header">
                    <input type="text" placeholder="Producto que desea..."></input>
                    <button>
                        <SearchIcon/>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Productos;
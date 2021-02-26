import React from 'react';
import '../assets/css/Productos.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import img1 from '../assets/images/cariño 6.jpg';
import img2 from '../assets/images/cariño 7.jpg';
import img3 from '../assets/images/cariño 8.jpg';

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
                    <input
                        className="Category"
                        type="text"
                        placeholder="        --- Categoria ---"
                        list="defaultNumbers"/>
                    <datalist id="defaultNumbers">
                        <option value="Caballero"></option>
                        <option value="Dama"></option>
                        <option value="Niño"></option>
                        <option value="Temporada"></option>
                    </datalist>
                </div>                   
            </div>
            <div className="rightSiteP">       
                <div className="Header">
                    <input type="text" placeholder="  Producto que desea..."></input>
                    <button>
                        <SearchIcon/>
                    </button>
                </div>
                <div className="Productos"> 
                    <div className="ColumnasC">
                        <div className="colP1">
                            <img src={img1}></img>
                            <h2>Q95.00</h2>
                            <p>
                                Caja sopresa a tu elección
                                con globo personalizado.
                            </p>
                        </div>
                        <div className="colP2">  
                            <img src={img2}></img>                           
                            <h2>Q25.00</h2>
                            <p>Tarro con chocolates personalizado.</p>
                        </div>
                        <div className="colP3">    
                            <img src={img3}></img>                           
                            <h2>Q30.00</h2>
                            <p>Cadena con dije + aretes + cajita de regalo</p>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
    )
}


export default Productos;
import React from 'react';
import '../assets/css/ConfCuenta.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo2 from '../assets/images/Logo.jpg';

function ConfCuenta(){
    return(
        <div className="main-cuenta">
            <div className="content-wrap">
                <div className="leftSiteCC">
                    <div className="logoC">
                        <img src={logo}></img>
                    </div>                    
                    <h2>Inicio <MayorQue/> Usuario <MayorQue/> Configurar Cuenta</h2>
                    <div className="logo2C">
                        <img src={logo2}></img>
                    </div>                   
                </div>
                <div className="rightSiteCC">       
                    <div className="header">
                        <h2>Completa el formulario:</h2>
                        <h3>Cuenta: admin</h3>
                    </div> 
                    <div className="bodyRightSiteCC">
                    <div className="bodyL">
                        <div className="form1">
                        <h3>Nombres:</h3>
                        <input type="text" placeholder="Nombres" value="Walter Ulises"></input>
                        </div>
                        <div className="form2">
                        <h3>Apellidos:</h3>
                        <input type="text" placeholder="Apellidos" value="Orozco Fuentes"></input>
                        </div>
                        <div className="form3">
                        <h3>Correo electrónico:</h3>
                        <input type="email" placeholder="correo@correo.com" value="walterof1@hotmail.com"></input>
                        </div>
                        <div className="form4">
                        <h3>Contraseña:</h3>
                        <input type="password" placeholder="************" value="paraiso123"></input>
                        </div>
                        <div className="form5">
                        <h3>Rol:</h3>
                        <input type="text" placeholder="Admin" value="admin"></input>
                        </div>
                        <br></br>
                        <a href="/"><button type="submit"> Actualizar</button> </a>
                    </div>
                    </div>          
                </div>
            </div>
        </div>
    )
}


export default ConfCuenta;
import React from 'react';
import '../assets/css/RecuperarCuenta.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo2 from '../assets/images/Logo.jpg';
import olvido from '../assets/images/se me olvido.jpg';
import { TextField } from '@material-ui/core';

function RecuperarCuenta(){
    return(
        <div className="main-recuperar">
        <div className="content-wrap">
            <div className="leftSiteRC">
                <div className="logoC">
                    <img src={logo}></img>
                </div>                    
                <h2>Inicio <MayorQue/> Recuperar Contraseña</h2>
                <div className="logo2C">
                    <img src={logo2}></img>
                </div>                   
            </div>
            <div className="rightSiteRC">       
                <div className="header">
                    <h2>Completa el formulario:</h2>
                </div> 
                <div className="bodyRightSite">
                    <div className="bodyL">
                        <div className="form1">
                        <h3>Nombres:</h3>
                        <input type="text" placeholder="Nombres"></input>
                        </div>
                        <div className="form2">
                        <h3>Apellidos:</h3>
                        <input type="text" placeholder="Apellidos"></input>
                        </div>
                        <div className="form3">
                        <h3>Correo electrónico:</h3>
                        <input type="text" placeholder="correo@correo.com" ></input>
                        </div>
                        <div className="form4">
                        <h3>Rol:</h3>
                        <input type="text" placeholder="Admin / Subadmin / Empleado"></input>
                        </div>
                        <br></br>
                        <a href="/"><button type="submit"> Enviar</button> </a>
                    </div>
                    <div className="bodyR">
                        <img src={olvido}></img>
                    </div>
                </div>          
            </div>
        </div>
    </div>
    )
}


export default RecuperarCuenta;
import React from 'react';
import '../assets/css/Inicio.css';
import logo from '../assets/images/logo horizontal.png';
import img1 from '../assets/images/cariño1.jpg';
import img2 from '../assets/images/cariño 2.jpg';
import img3 from '../assets/images/cariño 4.jpg';

function Inicio(){
    return(
        <div className="main-inicio">
            <div className="content-wrap">
                <div className="leftSite">
                    <img src={logo}></img>
                    <h3>¡¡Tu eliges, nosotros sorprendemos !!</h3>
                    <p>
                        Si desea estar pendiente de todas las novedades, 
                        promociones y productos puedes crear tu cuenta y seguir 
                        disfrutando de los mejores productos.
                    </p>
                    <input type="email" placeholder="Correo electrónico"></input>
                    <input type="password" placeholder="Contraseña"></input>
                    <button> Registrarse</button>
                </div>
                <div className="rightSite">
                    <img src={img1} className="img1"></img>
                    <div className="gemelosImg">
                        <img src={img2} className="img2"></img>
                        <img src={img3} className="img3"></img>
                    </div>                    
                </div>
            </div>
        </div>
    )
}


export default Inicio;
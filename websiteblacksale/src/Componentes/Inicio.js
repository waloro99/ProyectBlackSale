import React, {useState} from 'react';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import '../assets/css/Inicio.css';
import logo from '../assets/images/logo horizontal.png';
import img1 from '../assets/images/cariño1.jpg';
import img2 from '../assets/images/cariño 2.jpg';
import img3 from '../assets/images/cariño 4.jpg';
import { Link } from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
    modal:{
        position:'absolute',        
        widht: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: "16px 32px 24px",
        top: '50%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
    },
    textField:{
        widht:'100%',
        align:'center'
    },
    button:{
        textAlign:'center',
        backgroundColor: '#06001B',
        color: 'white',
        fontSize: '12px',
        fontFamily: 'Lato'
    },
    olvidar:{
        fontFamily:'Lato',
        padding:'10px',
        fontSize:'13px',
        textDecoration: 'none',
        color:'#06001B'
    }
}))


function Inicio(){
    const styles=useStyles();

    const [modal, setModal]=useState(false);

    const abrirCerrarModal =()=>{
        setModal(!modal);
    }

    const body=(
        <div className={styles.modal}>
            <div align="center">
                <h1>Iniciar Sesión</h1>
                <p>
                Bienvenido a Black Sale ... 
                <br/>
                Si no cuentas con un correo comunicate con 
                <br/>
                Black Sale.
                </p>
            </div>
            <div align="center">
                <TextField label="Correo electrónico" type="email" className={styles.textField}/>
                <br/>
                <TextField label="Contraseña" type="password"  className={styles.textField}/>
                <br/> <br/>
            </div>           
            <div align="center">
                <Button color="primary" className={styles.button}><Link to="/menu">Iniciar Sesión</Link></Button>
            </div>
            <div align="center" className={styles.olvidar}>
                <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
            </div>
        </div>
    )

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
                    <Button className={styles.button} onClick={()=>abrirCerrarModal()}>Registrarse</Button>
                    <Modal
                        open={modal}
                        onClose={abrirCerrarModal}>
                            {body}
                    </Modal>
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
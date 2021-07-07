import React, { Component } from 'react';
import '../assets/css/ModificarUsuario.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo2 from '../assets/images/Logo.jpg';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Login from './login';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { Done } from '@material-ui/icons';
import axios from "axios";

const url = 'http://localhost:3306/api/v1/users/';

class ModificarUsuario extends Component {

    state = {
        data:[],
        modalInsert: false,
        modalDelete: false,
        form:{
            _id: '',
            name: '',
            lastname: '',
            email: '',
            role: '',
            enabled: '',
            permissionCreate: '',
            permissionEdit: '',
            permissionDelete: ''
            //modalType: ''
        }
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
            this.setState({data: response.data});
            console.log(response.data);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    peticionPost=async()=>{
        await axios.post(url,this.state.form).then(response=>{
            this.modalInsert();
            this.peticionGet();
            console.log(response.data);
        })/*.catch(error=>{
            console.log(error.message);
        })*/
    }

    peticionPut=()=>{
        axios.put(url+this.state.form._id, this.state.form).then(response=>{
            this.modalInsert();
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }
    
    peticionDelete=()=>{
        axios.delete(url+this.state.form._id).then(response=>{
            this.setState({modalDelete: false});
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }
    modalInsert=()=>{
        this.setState({modalInsert: !this.state.modalInsert});
    }

    chooseProduct=(elemento)=>{
        this.setState({
            modalType: 'edit',
            form: {
                _id: elemento._id,
                name: elemento.name,
                lastname: elemento.lastname,
                email: elemento.email,
                role: elemento.role,
                enabled: elemento.enabled,
                permissionCreate: elemento.permissionCreate,
                permissionEdit: elemento.permissionEdit,
                permissionDelete: elemento.permissionDelete
                //modalType: ''
            }
        })
    }

    handleChange=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    componentDidMount() {
        this.peticionGet();
    }

    render(){
        const {form}=this.state;

    return(
        <div className="main-modificarusuario">
            <div className="content-wrap">
                <div className="leftSiteMU">
                    <div className="logoC">
                        <img src={logo}></img>
                    </div>                    
                    <h2>Inicio <MayorQue/> Usuario <MayorQue/> Modificar Usuario</h2>
                    <div className="logo2C">
                        <img src={logo2}></img>
                    </div>                   
                </div>
                <div className="rightSiteMU">       
                    <div className="header">
                        <h2>Modifica los usuarios:</h2>
                        <h3>Cuenta: <Link to="/"><Login/></Link></h3>
                    </div> 
                    <div className="bodyRightSite">
                        <div className="Products">
                            <div className="AgregarProducto">
                            <button className="btn btn-success" onClick={()=>{this.setState({form: null, modalType: 'insert'}); this.modalInsert()}}>Agregar Usuario <AddIcon/></button></div>
                            <br/>
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                    <th>Habilitado</th>
                                    <th>Agregar</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(elemento => {
                                        return(
                                        <tr>
                                            <td>{elemento._id}</td>
                                            <td>{elemento.name}</td>
                                            <td>{elemento.lastname}</td>
                                            <td>{elemento.email}</td>
                                            <td>{elemento.role}</td>
                                            <td>{elemento.enabled}</td>
                                            <td>{elemento.permissionCreate}</td>
                                            <td>{elemento.permissionEdit}</td>
                                            <td>{elemento.permissionDelete}</td> 
                                            <td>
                                            <div className="OpcionesBtn">
                                                <button className="btn btn-primary" onClick={() => {this.chooseProduct(elemento); this.modalInsert()}}><i className='far fa-edit'/><EditIcon/></button> {"   "}
                                                <button className="btn btn-danger" onClick={()=>{this.chooseProduct(elemento); this.setState({modalDelete: true})}}><i className='far fa-trash-alt'/><DeleteIcon/></button>
                                            </div>
                                            </td>
                                        </tr>
                                        )
                                        })
                                    }
                                </tbody>
                            </table>

                            <Modal isOpen={this.state.modalDelete}>
                                <ModalBody>
                                    ¿Estas seguro de eliminar el usuario de {form && form.name}?
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-danger" onClick={() => this.peticionDelete()}>
                                        Si <DoneIcon/>
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => this.setState({modalDelete: false})}>
                                        No <ClearIcon/>
                                    </button>
                                </ModalFooter>
                            </Modal>

                            <Modal isOpen={this.state.modalInsert}>
                                <ModalHeader>
                                    <div>
                                        <h3>Usuario</h3>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-group">
                                        <label>Nombre del Usuario:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Nombre..."
                                            value={form?form.name: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Apellido del Usuario:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="lastname"
                                            placeholder="Apellido..."
                                            value={form?form.lastname: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Correo Electrónico:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="email"
                                            placeholder="correo@correo.com"
                                            value={form?form.email: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Rol del Usuario:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="role"
                                            placeholder="Admin/Subadmin/Empleado"
                                            list="defaultNumbers"
                                            value={form?form.role: ''}
                                            onChange={this.handleChange}
                                            />
                                            <datalist id="defaultNumbers">
                                                <option value="Admin"></option>
                                                <option value="Subadmin"></option>
                                                <option value="Empleado"></option>
                                            </datalist>
                                        <br />
                                        <label>Habilitado:</label>
                                            <input
                                            className="form-control"
                                            type="number"
                                            name="enabled"
                                            min="0" max="1"
                                            placeholder="1/0"
                                            list="defaultBool"
                                            value={form?form.enabled: ''}
                                            onChange={this.handleChange}
                                            />
                                            <datalist id="defaultBool">
                                                <option value="1"></option>
                                                <option value="0"></option>
                                            </datalist>
                                        <br />
                                        <label>Permitido Agregar:</label>
                                            <input
                                            className="form-control"
                                            type="number"
                                            name="permissionCreate"
                                            min="0" max="1"
                                            placeholder="1/0"
                                            list="defaultBool1"
                                            value={form?form.permissionCreate: ''}
                                            onChange={this.handleChange}
                                            />
                                            <datalist id="defaultBool1">
                                                <option value="1"></option>
                                                <option value="0"></option>
                                            </datalist>
                                        <br />
                                            <label>Permitido Editar:</label>
                                            <input
                                            className="form-control"
                                            type="number"
                                            name="permissionEdit"
                                            min="0" max="1"
                                            placeholder="1/0"
                                            list="defaultBool2"
                                            value={form?form.permissionEdit: ''}
                                            onChange={this.handleChange}
                                            />
                                            <datalist id="defaultBool2">
                                                <option value="1"></option>
                                                <option value="0"></option>
                                            </datalist>
                                        <br />
                                            <label>Permitido Eliminar:</label>
                                            <input
                                            className="form-control"
                                            type="number"
                                            name="permissionDelete"
                                            min="0" max="1"
                                            placeholder="1/0"
                                            list="defaultBool3"
                                            value={form?form.permissionDelete: ''}
                                            onChange={this.handleChange}
                                            />
                                            <datalist id="defaultBool3">
                                                <option value="1"></option>
                                                <option value="0"></option>
                                            </datalist>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    {this.state.modalType == 'insert' ?
                                        <button className="btn btn-success"
                                            onClick={()=>this.peticionPost()}>
                                            Guardar  <SaveAltIcon/>
                                        </button> :
                                        <button className="btn btn-primary"
                                        onClick={()=>this.peticionPut()}>
                                            Editar  <SaveAltIcon/>
                                        </button>
                                    }
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => this.modalInsert()}>
                                        Cancelar <CancelIcon/>
                                    </button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>          
                </div>
            </div>
        </div>
        )
    }
}


export default ModificarUsuario;
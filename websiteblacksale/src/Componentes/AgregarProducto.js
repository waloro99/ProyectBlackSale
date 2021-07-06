import React, { Component } from 'react';
import '../assets/css/AgregarProducto.css';
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

const url = 'http://localhost:3306/api/v1/products/';

class AgregarProducto extends Component {

    state = {
        data:[],
        modalInsert: false,
        modalDelete: false,
        form:{
            _id: '',
            id: '',
            name: '',
            category: '',
            price: '',
            photo: '',
            stocks: '',
            description: ''
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
                id: elemento.id,
                name: elemento.name,
                category: elemento.category,
                price: elemento.price,
                photo: elemento.photo,
                stocks: elemento.stocks,
                description: elemento.description
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
                        <h2>Productos:</h2>
                        <h3>Cuenta: <Link to="/"><Login/></Link></h3>
                    </div> 
                    <div className="bodyRightSite">
                        <div className="Products">
                            <div className="AgregarProducto">
                            <button className="btn btn-success" onClick={()=>{this.setState({form: null, modalType: 'insert'}); this.modalInsert()}}>Agregar Producto <AddIcon/></button></div>
                            <br/>
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Categoria</th>
                                    <th>Precio</th>
                                    <th>Existencias</th>
                                    <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map(elemento => {
                                        return(
                                        <tr>
                                            <td>{elemento._id}</td>
                                            <td>{elemento.name}</td>
                                            <td>{elemento.category}</td>
                                            <td>{elemento.price}</td>
                                            <td>{elemento.stocks}</td>
                                            <td>{elemento.description}</td>
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
                                    ¿Estas seguro de eliminar el producto {form && form.name}?
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
                                        <h3>Nuevo Producto</h3>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-group">
                                        <label>ID del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="_id"
                                            readonly="readonly"
                                            placeholder="id..."
                                            value={form?form._id:this.state.data.length+1} //''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Nombre del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Nombre..."
                                            value={form?form.name: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Categoria del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="category"
                                            placeholder="Caballero/Dama/Niño/Temporada"
                                            list="defaultNumbers"
                                            value={form?form.category: ''}
                                            onChange={this.handleChange}
                                            />
                                            <datalist id="defaultNumbers">
                                                <option value="Caballero"></option>
                                                <option value="Dama"></option>
                                                <option value="Niño"></option>
                                                <option value="Temporada"></option>
                                            </datalist>
                                        <br />
                                        <label>Precio del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            min="0.00"
                                            max="10000.00"
                                            step="0.01"
                                            name="price"
                                            placeholder="Q12.00"
                                            value={form?form.price: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Foto del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="photo"
                                            placeholder="/foto1.png"
                                            value={form?form.photo: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Existencias:</label>
                                            <input
                                            className="form-control"
                                            type="number"
                                            min="0"
                                            max="10000"
                                            name="stocks"
                                            placeholder="000"
                                            value={form?form.stocks: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Descripcion:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="description"
                                            placeholder="Descripción del producto..."
                                            value={form?form.description: ''}
                                            onChange={this.handleChange}
                                            />
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


export default AgregarProducto;
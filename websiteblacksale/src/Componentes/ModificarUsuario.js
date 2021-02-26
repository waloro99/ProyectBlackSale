import React, { useState, useEffect }  from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { Done } from '@material-ui/icons';

function ModificarUsuario(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const readUser = () => {
            if (localStorage.getItem('users')) {
                setData(JSON.parse(localStorage.getItem('users')))
            }
        }
        readUser()
    }, []);

    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalInsert, setModalInsert] = useState(false);

    const [selectedUser, setSelectedProduct] = useState({
        id: '',
        name: '',
        lastname: '',
        email: '',
        role: '',
        enabled: '',
        Permissions: ''
    });

    const chooseProduct=(elemento, caso)=>{
        setSelectedProduct(elemento);
        (caso==='Edit')?setModalEdit(true):setModalDelete(true)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setSelectedProduct((prevState)=>({
        ...prevState,
        [name]: value
        }));
    }

    const edit=()=>{
        var dataNueva=data;
        dataNueva.map(user=>{
            if(user.id===selectedUser.id){
                user.name=selectedUser.name;
                user.lastname=selectedUser.lastname;
                user.email=selectedUser.email;
                user.role=selectedUser.role;
                user.enabled=selectedUser.enabled;
                user.Permissions=selectedUser.Permissions;
            }
        });
        localStorage.setItem('users', JSON.stringify(dataNueva))
        setData(dataNueva);
        setModalEdit(false);
    }

    const deleted =()=>{
        const filteredData = data.filter(user=>user.id!==selectedUser.id);
        localStorage.setItem('users', JSON.stringify(filteredData))
        setData(data.filter(user=>user.id!==selectedUser.id));
        setModalDelete(false);
    }

    const abrirModalInsertar=()=>{
        setSelectedProduct(null);
        setModalInsert(true);
    }

    const insert =()=>{
        var valueInsert=selectedUser;
        if (data.length===0) {
            valueInsert.id=1;
        }
        else {
            valueInsert.id=data[data.length-1].id+1;
        }
        
        var newData = data;
        newData.push(valueInsert);
        localStorage.setItem('users', JSON.stringify(newData))
        setData(newData);
        setModalInsert(false);
    }

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
                        <h3>Cuenta: admin</h3>
                    </div> 
                    <div className="bodyRightSite">
                        <div className="Products">
                            <div className="AgregarProducto">
                            <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Agregar Usuario <AddIcon/></button></div>
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
                                    <th>Permitido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(elemento=>(
                                        <tr>
                                            <td>{elemento.id}</td>
                                            <td>{elemento.name}</td>
                                            <td>{elemento.lastname}</td>
                                            <td>{elemento.email}</td>
                                            <td>{elemento.role}</td>
                                            <td>{elemento.enabled}</td>
                                            <td>{elemento.Permissions}</td>
                                            <td>
                                            <div className="OpcionesBtn">
                                                <button className="btn btn-primary" onClick={()=>chooseProduct(elemento, 'Edit')}><i className='far fa-edit'/><EditIcon/></button> {"   "}
                                                <button className="btn btn-danger" onClick={()=>chooseProduct(elemento, 'Delete')}><i className='far fa-trash-alt'/><DeleteIcon/></button>
                                            </div>
                                            </td>
                                        </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            <Modal isOpen={modalEdit}>
                                <ModalHeader>
                                <div>
                                    <h3>Editar Usuario</h3>
                                </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-group">
                                        <label>Nombres del Usuario:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Nombre1 Nombre2"
                                        value={selectedUser && selectedUser.name}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Apellidos del Usuario:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="lastname"
                                        placeholder="Apellido1 Apellido2"
                                        value={selectedUser && selectedUser.lastname}
                                        onChange={handleChange}
                                        />                                    
                                        <br />
                                        <label>Correo Electrónico:</label>
                                        <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        placeholder="correo@correo.com"
                                        value={selectedUser && selectedUser.email}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Rol del Usuario:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="role"
                                        list="defaultRole"
                                        placeholder="Admin/SubAdmin/Empleado"
                                        value={selectedUser && selectedUser.role}
                                        onChange={handleChange}
                                        />
                                        <datalist id="defaultRole">
                                            <option value="Admin"></option>
                                            <option value="SubAdmin"></option>
                                            <option value="Empleado"></option>
                                        </datalist>
                                        <br />
                                        <label>Habilitado:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="enabled"
                                        placeholder="Verdadero/Falso"
                                        list="defaultEnabled"
                                        value={selectedUser && selectedUser.enabled}
                                        onChange={handleChange}
                                        />
                                        <datalist id="defaultEnabled">
                                            <option value="Verdadero"></option>
                                            <option value="Falso"></option>
                                        </datalist>
                                        <br />
                                        <label>Permitido:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="Permissions"
                                        list="defaultPermissions"
                                        placeholder="Agregar/Editar/Eliminar"
                                        value={selectedUser && selectedUser.Permissions}
                                        onChange={handleChange}
                                        />
                                        <datalist id="defaultPermissions">
                                                <option value="Agregar"></option>
                                                <option value="Editar"></option>
                                                <option value="Eliminar"></option>
                                                <option value="Agregar/Eliminar"></option>
                                                <option value="Editar/Eliminar"></option>
                                                <option value="Agregar/Editar"></option>
                                                <option value="Agregar/Editar/Eliminar"></option>
                                        </datalist>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-primary" onClick={()=>edit()}>
                                        Guardar <SaveAltIcon/>
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>setModalEdit(false)}>
                                        Cancelar <CancelIcon/>
                                    </button>
                                </ModalFooter>
                            </Modal>

                            <Modal isOpen={modalDelete}>
                                <ModalBody>
                                    ¿Estas seguro de eliminar el usuario de {selectedUser && selectedUser.name}?
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-danger" onClick={()=>deleted()}>
                                        Si <DoneIcon/>
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={()=>setModalDelete(false)}>
                                        No <ClearIcon/>
                                    </button>
                                </ModalFooter>
                            </Modal>

                            <Modal isOpen={modalInsert}>
                                <ModalHeader>
                                    <div>
                                        <h3>Nuevo Usuario</h3>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-group">
                                        <label>Nombres del Usuario:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Nombre1 Nombre2"
                                            value={selectedUser ? selectedUser.name: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Apellidos del Usuario:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="lastname"
                                            placeholder="Apellido1 Apellido2"
                                            value={selectedUser ? selectedUser.lastname: ''}
                                            onChange={handleChange}
                                            />                                            
                                        <br />
                                        <label>Correo Electrónico:</label>
                                            <input
                                            className="form-control"
                                            type="email"                                      
                                            name="email"
                                            placeholder="correo@correo.com"
                                            value={selectedUser ? selectedUser.email: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Rol del Usuario:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="role"
                                            list="defaultRole"
                                            placeholder="Admin/SubAdmin/Empleado"
                                            value={selectedUser ? selectedUser.role: ''}
                                            onChange={handleChange}
                                            />
                                            <datalist id="defaultRole">
                                                <option value="Admin"></option>
                                                <option value="SubAdmin"></option>
                                                <option value="Empleado"></option>
                                            </datalist>
                                        <br />
                                        <label>Habilitado:</label>
                                            <input
                                            className="form-control"                                           
                                            name="enabled"
                                            placeholder="Verdadero/Falso"
                                            list="defaultEnabled"
                                            value={selectedUser ? selectedUser.enabled: ''}
                                            onChange={handleChange}
                                            />
                                            <datalist id="defaultEnabled">
                                                <option value="Verdadero"></option>
                                                <option value="Falso"></option>
                                            </datalist>
                                        <br />
                                        <label>Permitido:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            list="defaultPermissions"
                                            name="Permissions"
                                            placeholder="Agregar/Editar/Eliminar"
                                            value={selectedUser ? selectedUser.Permissions: ''}
                                            onChange={handleChange}
                                            />
                                            <datalist id="defaultPermissions">
                                                <option value="Agregar"></option>
                                                <option value="Editar"></option>
                                                <option value="Eliminar"></option>
                                                <option value="Agregar/Eliminar"></option>
                                                <option value="Editar/Eliminar"></option>
                                                <option value="Agregar/Editar"></option>
                                                <option value="Agregar/Editar/Eliminar"></option>
                                            </datalist>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-primary"
                                        onClick={()=>insert()}>
                                        Guardar  <SaveAltIcon/>
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>setModalInsert(false)}>
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


export default ModificarUsuario;
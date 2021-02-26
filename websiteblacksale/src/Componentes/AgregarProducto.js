import React, { useState, useEffect } from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { Done } from '@material-ui/icons';

function AgregarProducto(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const readProduct = () => {
            if (localStorage.getItem('products')) {
                setData(JSON.parse(localStorage.getItem('products')))
            }
        }
        readProduct()
    }, []);

    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalInsert, setModalInsert] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState({
        id: '',
        name: '',
        category: '',
        price: '',
        photo: '',
        stocks: '',
        description: ''
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
        dataNueva.map(product=>{
            if(product.id===selectedProduct.id){
                product.name=selectedProduct.name;
                product.category=selectedProduct.category;
                product.price=selectedProduct.price;
                product.photo=selectedProduct.photo;
                product.stocks=selectedProduct.stocks;
                product.description=selectedProduct.description;
            }
        });
        localStorage.setItem('products', JSON.stringify(dataNueva))
        setData(dataNueva);
        setModalEdit(false);
    }

    const deleted =()=>{
        const filteredData = data.filter(product=>product.id!==selectedProduct.id);
        localStorage.setItem('products', JSON.stringify(filteredData))
        setData(data.filter(product=>product.id!==selectedProduct.id));
        setModalDelete(false);
    }

    const abrirModalInsertar=()=>{
        setSelectedProduct(null);
        setModalInsert(true);
    }

    const insert =()=>{
        var valueInsert=selectedProduct;
        if (data.length===0) {
            valueInsert.id=1;
        }
        else {
            valueInsert.id=data[data.length-1].id+1;
        }
        
        var newData = data;
        newData.push(valueInsert);
        localStorage.setItem('products', JSON.stringify(newData))
        setData(newData);
        setModalInsert(false);
    }



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
                        <h3>Cuenta: admin</h3>
                    </div> 
                    <div className="bodyRightSite">
                        <div className="Products">
                            <div className="AgregarProducto">
                            <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Agregar Producto <AddIcon/></button></div>
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
                                    {data.map(elemento=>(
                                        <tr>
                                            <td>{elemento.id}</td>
                                            <td>{elemento.name}</td>
                                            <td>{elemento.category}</td>
                                            <td>{elemento.price}</td>
                                            <td>{elemento.stocks}</td>
                                            <td>{elemento.description}</td>
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
                                <div className="tituloEditar">
                                    <h3>Editar Producto</h3>
                                </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-group">
                                        <label>Nombre del Producto:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Nombre..."
                                        value={selectedProduct && selectedProduct.name}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Categoria del Producto:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="category"
                                        placeholder="Caballero/Dama/Niño/Temporada"
                                        list="defaultNumbers"
                                        value={selectedProduct && selectedProduct.category}
                                        onChange={handleChange}
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
                                        type="number"
                                        min="0.00"
                                        max="10000.00"
                                        step="0.01"
                                        name="price"
                                        placeholder="Q12.00"
                                        value={selectedProduct && selectedProduct.price}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Foto del Producto:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="photo"
                                        placeholder="/foto1.png"
                                        value={selectedProduct && selectedProduct.photo}
                                        onChange={handleChange}
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
                                        value={selectedProduct && selectedProduct.stocks}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Descripción:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="description"
                                        placeholder="Descripción del producto..."
                                        value={selectedProduct && selectedProduct.description}
                                        onChange={handleChange}
                                        />
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
                                    ¿Estas seguro de eliminar el producto {selectedProduct && selectedProduct.name}?
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
                                        <h3>Nuevo Producto</h3>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-group">
                                        <label>Nombre del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Nombre..."
                                            value={selectedProduct ? selectedProduct.name: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Categoria del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="category"
                                            placeholder="Caballero/Dama/Niño/Temporada"
                                            list="defaultNumbers"
                                            value={selectedProduct ? selectedProduct.category: ''}
                                            onChange={handleChange}
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
                                            type="number"
                                            min="0.00"
                                            max="10000.00"
                                            step="0.01"
                                            name="price"
                                            placeholder="Q12.00"
                                            value={selectedProduct ? selectedProduct.price: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Foto del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="photo"
                                            placeholder="/foto1.png"
                                            value={selectedProduct ? selectedProduct.photo: ''}
                                            onChange={handleChange}
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
                                            value={selectedProduct ? selectedProduct.stocks: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Descripcion:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="description"
                                            placeholder="Descripción del producto..."
                                            value={selectedProduct ? selectedProduct.description: ''}
                                            onChange={handleChange}
                                            />
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


export default AgregarProducto;
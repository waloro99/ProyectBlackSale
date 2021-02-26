import React, { useState, useEffect } from 'react';
import '../assets/css/AgregarProducto.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo2 from '../assets/images/Logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { Link } from 'react-router-dom';

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
        setData(dataNueva);
        setModalEdit(false);
    }

    const deleted =()=>{
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
                            <br/>
                            <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Agregar</button>
                            <br/><br/>
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
                                            <td><Link to={"/products/"+elemento.name} className='disabled'>
                                            {elemento.name}
                                            </Link></td>
                                            <td>{elemento.category}</td>
                                            <td>{elemento.price}</td>
                                            <td>{elemento.stocks}</td>
                                            <td>{elemento.description}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={()=>chooseProduct(elemento, 'Edit')}><i className='far fa-edit'/>Editar</button> {"   "}
                                                <button className="btn btn-danger" onClick={()=>chooseProduct(elemento, 'Delete')}><i className='far fa-trash-alt'/>Eliminar</button>
                                            </td>
                                        </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            <Modal isOpen={modalEdit}>
                                <ModalHeader>
                                <div>
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
                                        value={selectedProduct && selectedProduct.name}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Categoria del Producto:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="category"
                                        value={selectedProduct && selectedProduct.category}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Precio del Producto:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="price"
                                        value={selectedProduct && selectedProduct.price}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Foto del Producto:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="photo"
                                        value={selectedProduct && selectedProduct.photo}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Existencias:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="stocks"
                                        value={selectedProduct && selectedProduct.stocks}
                                        onChange={handleChange}
                                        />
                                        <br />
                                        <label>Descripción:</label>
                                        <input
                                        className="form-control"
                                        type="text"
                                        name="description"
                                        value={selectedProduct && selectedProduct.description}
                                        onChange={handleChange}
                                        />
                                        <br />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-primary" onClick={()=>edit()}>
                                        Guardar
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>setModalEdit(false)}
                                    >
                                        Cancelar
                                    </button>
                                </ModalFooter>
                            </Modal>

                            <Modal isOpen={modalDelete}>
                                <ModalBody>
                                    ¿Estas seguro de eliminar el producto {selectedProduct && selectedProduct.name}?
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-danger" onClick={()=>deleted()}>
                                        Si
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={()=>setModalDelete(false)}
                                    >
                                        No
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
                                            value={selectedProduct ? selectedProduct.name: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Categoria del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="category"
                                            value={selectedProduct ? selectedProduct.category: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Precio del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="price"
                                            value={selectedProduct ? selectedProduct.price: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Foto del Producto:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="photo"
                                            value={selectedProduct ? selectedProduct.photo: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Existencias:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="stocks"
                                            value={selectedProduct ? selectedProduct.stocks: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                        <label>Descripcion:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="description"
                                            value={selectedProduct ? selectedProduct.description: ''}
                                            onChange={handleChange}
                                            />
                                        <br />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-primary"
                                        onClick={()=>insert()}>
                                            Insert
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>setModalInsert(false)}
                                    >
                                        Cancel
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
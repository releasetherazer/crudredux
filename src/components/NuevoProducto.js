import React, {useState} from 'react';
import {creaNuevoProducto} from '../actions/productosAction';
import {useDispatch, useSelector} from 'react-redux';


const NuevoProducto = () => {


    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    const dispatch = useDispatch();

    const agregarProducto = (producto) => dispatch(creaNuevoProducto(producto));


    const handlesubmit = e =>{

        e.preventDefault();
        //validar campos


        // enviar al action
        agregarProducto({

            nombre, precio
        });
    }
    
    return ( 

      <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Agregar nuevo producto
                            </h2>
                            <form
                                  onSubmit={handlesubmit}
                            >
                                <div className="form-group">
                                    <label>Nombre Producto</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre producto"
                                        name="nombre"
                                        value={nombre}
                                        onChange={e=>guardarNombre(e.target.value)}
                                                                                                                                                            
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio Producto</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Precio Producto"
                                        name="precio"
                                        value={precio}
                                        onChange={e=>guardarPrecio(Number(e.target.value))}
                                        
                                                                              
                                    />
                                </div>
                                <button 
                                    type="submit"    
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar Producto</button>
                            </form>
                    </div>
                </div>
            </div>
      </div>
     );
}
 
export default NuevoProducto;
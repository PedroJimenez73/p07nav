import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setCustomer } from '../services/Clientes';
import {useFadeLoad} from '../../../hooks/useFadeLoad';

export default function CrearCliente() {

    const [form, setForm] = useState({
        nombre: '',
        cif: '',
        localidad: ''
    })
    let navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setCustomer(form);
        navigate("/ventas/tabla-clientes");
    }

    return (
        <div className="container" ref={useFadeLoad()}>
            <div className="row">
                <div className="col-100">
                    <form onSubmit={handleSubmit}>
                        <h1>Nuevo Cliente</h1>
                        <div className="row">
                            <div className="col-100">
                                <label>Nombre</label>
                                <input type="text" 
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-100">
                                <label>CIF</label>
                                <input type="text" 
                                    name="cif"
                                    value={form.cif}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-100">
                                <label>Localidad</label>
                                <input type="text" 
                                    name="localidad"
                                    value={form.localidad}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex j-end a-center m-t">
                            <Link to="/ventas/tabla-clientes">
                                <button className="outline">Cancelar</button>
                            </Link>
                            <button type="submit" className="m-l">
                            Añadir
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
 
    )
}

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getCustomers } from '../services/Clientes';
import {useFadeLoad} from '../../../hooks/useFadeLoad';

export default function TablaClientes() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const customersIn = getCustomers();
        setCustomers(() => (customersIn));
    }, [customers])

    return (
        <div className="container" ref={useFadeLoad()}>
            <div className="row">
                <div className="col-100">
                    <h1>Clientes</h1>
                    <Link to="../">
                        <button>Regresar</button>
                    </Link>
                    <Link to="../crear-cliente">
                        <button>Nuevo cliente</button>
                    </Link>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(cliente => {
                                return (
                                    <tr key={cliente.cif}>
                                        <td>{cliente.nombre}</td>
                                        <td>
                                            <Link to={`/ventas/visualizar-cliente/${cliente.cif}`}>
                                                Visualizar
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getCustomers } from '../services/Clientes';

export default function TablaClientes() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const customersIn = getCustomers();
        setCustomers(() => (customersIn));
    }, [customers])

    return (
        <div className="container">
            <div className="row">
                <div className="col-100">
                    <h1>Clientes</h1>
                    <Link to="../">
                        <button>Regresar</button>
                    </Link>
                    {/* 
            <button type="button" routerLink="../crear-cliente">Nuevo cliente</button> */}
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>CIF</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(cliente => {
                                return (
                                    <tr key={cliente.cif}>
                                        <td>{cliente.nombre}</td>
                                        <td>{cliente.cif}</td>
                                        <td>
                                            {/* <b routerLink="/ventas/visualizar-cliente/{{cliente.id}}">Visualizar</b> */}
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

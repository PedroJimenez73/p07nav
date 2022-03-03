import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import TablaClientes from './clientes/TablaClientes'

export default function InicioVentas() {
  return (
    <Routes>
        <Route path="/" element={<Outlet />}>
            <Route index element={<InicioVentasLayout />} />
            <Route path="tabla-clientes" element={<TablaClientes />} />
        </Route>
    </Routes>
  )
}

function InicioVentasLayout() {
    return (
        <div className="container">
            <h1>Ventas</h1>
            <Link to="tabla-clientes">
                <button>Clientes</button>
            </Link>
            <Outlet />
        </div>
    )
}

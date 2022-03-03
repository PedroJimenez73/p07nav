import React from 'react'
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "activo" : ""}>
            Inicio
        </NavLink>
        <NavLink to="/ventas" className={({ isActive }) => isActive ? "activo" : ""}>
            Ventas
        </NavLink>
        <NavLink to="/soporte" className={({ isActive }) => isActive ? "activo" : ""}>
            Soporte
        </NavLink>
      </nav >
  )
}

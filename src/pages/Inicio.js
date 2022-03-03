import React from 'react'
import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <div className="container">
            <h1>Bienvenidos a nuestra aplicación</h1>
            <Link to="/soporte">
                <button type="button">Soporte</button>
            </Link>
        </div>
    )
}

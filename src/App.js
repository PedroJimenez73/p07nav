import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav';

import Inicio from './pages/Inicio';
import Soporte from './pages/Soporte';

const InicioVentas = React.lazy(() => import("./modules/ventas/InicioVentas"));

function App() {
  return (
      <>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="soporte" element={<Soporte />} />
                <Route
                    path="ventas/*"
                    element={
                    <React.Suspense fallback={<>...</>}>
                        <InicioVentas />
                    </React.Suspense>
                    }
                />
                <Route path="*" element={    
                        <div className="container">
                            <h1>Lo sentimos la página no existe</h1>
                            <Link to="/"><button>Volver a inicio</button></Link>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;

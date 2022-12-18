import React from 'react';
import "../styles/header.css"

const Pageheader = () => {
    return (
        <header>
            <ul className='main-list'>
                <li><a>Inicio</a></li>
                <li><a>Buscar Equipo</a></li>
                <li><a>Crear Equipo</a></li>
                <li><a>Recursos</a></li>
            </ul>
        </header>
    );
}

export default Pageheader;
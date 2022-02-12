import React, { useContext } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Search from './Search';

import { UserContext } from './context/UserContext';

function Menu({ title, onsearch }) {
    const { user: { token } } = useContext(UserContext);
    return (
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    <Link to="/">{title} </Link>
                </div>
                <div className="search">
                    <Search onsearch={onsearch} />
                </div>
                <div className="actions">
                    {
                        !token ?
                            <>
                                <Link to="/login">Inicia sesión </Link>
                                <Link to="/signup">Registro </Link>
                            </>
                            : <>
                                <Link to="/checkout">Carrito </Link>
                                <Link to="/profile">Mi Perfil </Link>
                                <Link to="/logout">Cerrar sesión </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Menu;
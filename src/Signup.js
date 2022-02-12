import React, { useState, useContext } from 'react';

import { signup, login } from './services';
import { useNavigate } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import { UserContext } from './context/UserContext';

import './Signup.css';

function Signup({ type }) {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { saveToken } = useContext(UserContext)

    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);

        const user = type ? await signup(dataObject) : await login(dataObject);

        if (user.message === 'Error' || user.menssage === 'Error') {
            setErrorMessage(user.detail)
        } else {
            saveToken(user.detail);
            e.target.reset();
            navigate('/')
        }
        setLoading(false);
    }

    return (
        <div className="new-item-panel-container">
            <div className="new-item-panel" style={loading ? { textAlign: 'center' } : {}}>
                {
                    loading
                        ? <div style={{ margin: 'auto' }}>
                            <Spinner />
                        </div>
                        : <form onSubmit={handleSignup}>
                            {
                                type &&
                                <>
                                    <label>Nombre</label><br />
                                    <input type="text" name="firstname" className="input" /><br />

                                    <label>Apellido</label><br />
                                    <input type="text" name="lastname" className="input" /><br />
                                </>
                            }
                            <label>Correo electrónico</label><br />
                            <input type="email" name="mail" className="input" /><br />

                            <label>{type ? 'Crear contraseña' : 'Contraseña'}</label><br />
                            <input type="password" name="password" className="input" /><br />

                            {
                                type &&
                                <>
                                    <label>Confirmar contraseña</label><br />
                                    <input type="password" name="passwordConfirm" className="input" /><br />
                                </>
                            }
                            <input type="submit" className="button btn-blue" value={type ? 'Crear cuenta' : 'Iniciar sesión'} />
                            <button className="button btn-normal" onClick={() => { navigate('/') }}>Cancelar</button>
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        </form>

                }
            </div>
        </div>
    );
}

export default Signup;
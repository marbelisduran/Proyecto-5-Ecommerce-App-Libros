import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { addHandler } from './shared/utils';
import { UserContext } from './context/UserContext'
import './Item.css';

function Item({ id, title, price, image, quantity, onupdatequantity = () => { } }) {
    const navigate = useNavigate();
    const [infoLibro, setInfoLibro] = useState({
        title: '',
        price: '',
        image: '',
        quantity: 1,
        stars: []
    });

    const { user: { token } } = useContext(UserContext);

    useEffect(() => {

        setInfoLibro({
            id,
            title,
            price,
            image,
            quantity: parseInt(quantity),
            stars: Array(parseInt(quantity)).fill(1)
        });
    }, [])

    const onChangeRating = (e) => {
        const quantity = parseInt(e.target.value)
        setInfoLibro({
            ...infoLibro,
            quantity: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        onupdatequantity({ id: infoLibro.id, title: infoLibro.title, price: infoLibro.title, image: infoLibro.image, quantity: quantity });
    }
    return (
        <div className="item">
            <div className="image"><img src={infoLibro.image} width="100%" /></div>
            <div className="title">{infoLibro.title}</div>
            <div className="price">${infoLibro.price}</div>
            <div className="quantity">
                Cantidad
                <select value={infoLibro.quantity} onChange={onChangeRating} style={{ width: '80px', marginLeft: '20px', textAlign: 'right', padding: '2px 5px' }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="actions">
                <button className="infoBtn" onClick={() => navigate(`/book/${id}`)}>Reseña del libro</button>
                <button className="addBtn" onClick={() => { addHandler(id, token, navigate) }}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Item;
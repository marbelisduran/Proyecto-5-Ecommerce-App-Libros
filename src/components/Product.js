import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext'
import { addHandler } from '../shared/utils';

import classes from './Product.module.css';

const Product = ({ books }) => {
  const { user: { token } } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const infoLibro = books[+id];
  return (
    <div className={classes.productInfo}>
      <h1>{infoLibro?.title}</h1>

      <p>
        Lorem Ipsum
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      </p>

      <img src={infoLibro?.image} height={400} />
      <hr />
      <h3>${infoLibro.price}</h3>
      <div className={classes.actions}>
        <button className={classes.addBtn} onClick={() => { addHandler(+id, token, navigate) }}>Agregar al carrito</button>
        <button className={classes.backBtn} onClick={() => navigate(`/book`)}>Volver al listado</button>
      </div>
    </div>
  );
};

export default Product;

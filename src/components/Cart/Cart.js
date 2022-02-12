import React, { useEffect, useState } from 'react'

import { getStorage, removeHandler, originalBooks as books } from '../../shared/utils';

import './Cart.css';

const Cart = () => {
  const [products, setProducts] = useState([]);

  const booksHandler = (ids) => {
    setProducts(ids.map((id) => (books[id])));
  }

  useEffect(() => {
    booksHandler(getStorage());
  }, [])
  return (
    <div className='Cart'>
      {
        !products.length
          ? <h1>No hay productos en el carrito</h1>
          : <table>
            <tbody>
              <tr>
                <th>id</th>
                <th>Título</th>
                <th>Precio</th>
                <th>Portada</th>
                <th style={{ textAlign: 'center' }}>Eliminar</th>
              </tr>
              {products.map((book, index) => (
                <tr key={index}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>${book.price}</td>
                  <td><img src={book.image} height={80} /></td>
                  <td className='delete-td'><img className='trash-icon' src='https://www.pngmart.com/files/16/Trash-Basket-PNG-Photos.png' onClick={() => booksHandler(removeHandler(index))} /></td>
                </tr>
              ))}
              <tr >
                <td></td>
                <th style={{ textAlign: 'right' }}>Total:</th>
                <td>${products.reduce((acc, nxt) => +nxt.price + acc, 0).toFixed(2)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
      }
    </div>
  )
}

export default Cart

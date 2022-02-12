import React from 'react';
import Item from './Item';
import './List.css';

function List({ books, onupdatequantity }) {
    return (
        <div className="list">
            {books.map(item =>
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    quantity={item.quantity}
                    onupdatequantity={onupdatequantity}
                />
            )}
        </div>
    );
}


export default List;
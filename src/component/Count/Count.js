import React from 'react';
import './Count.css'
const Count = (props) => {
   const totalPrice = props.products.reduce((total, product)=> total + product.price,0)
    return (
        <div>
            <h3>Added Product : {props.products.length}</h3>
            <p>Total Price: ${Math.ceil(totalPrice)}</p>
        </div>
    );
};

export default Count;
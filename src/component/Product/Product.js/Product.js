import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const {product_name,price,img, instructor}=props.product
    return (
        <div className="product-component">
            <h3>{product_name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p><small>instructor: {instructor}</small></p>
            <button onClick={()=>props.handleButton(props.product)}><FontAwesomeIcon icon={faCartPlus}/> Enroll now</button>
        </div>
    );
};

export default Product;
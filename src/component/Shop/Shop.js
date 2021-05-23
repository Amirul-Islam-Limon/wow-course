import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData/fakeData.json'
import Product from '../Product/Product.js/Product';
import Count from '../Count/Count';

const Shop = () => {
    const[products, setProducts] =useState([])
    const handleButton=(product)=>{
        const newProducts = [...products,product];
        setProducts(newProducts);
    }
    
    return (
        <div className="shop-component">
            <div className="products-container">
                {
                    fakeData.map(product=> <Product handleButton={handleButton} product={product}></Product>)
                }
            </div>
            <div className="count-container">
                <Count products={products}></Count>
            </div>
        </div>
    );
};

export default Shop;
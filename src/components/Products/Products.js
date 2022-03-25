import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import './Products.css';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='products-container'>
            <div className='laptop-container'>
                <h2>Product Container:{products.length}</h2>
                {
                    products.map(product => {
                        <Laptop></Laptop>
                    })
                }
            </div>
            <div className='cart-container'>
                <h2>Cart Container</h2>
            </div>
        </div>
    );
};

export default Products;
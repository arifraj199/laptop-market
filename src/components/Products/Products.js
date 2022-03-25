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
                {
                    products.map(product =>
                        <Laptop 
                            key={product.id}
                            product={product}
                        ></Laptop>)
                }
            </div>
            <div className='cart-container'>
                <h2>Cart Container</h2>
            </div>
        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Laptop from '../Laptop/Laptop';
import './Products.css';

const Products = () => {
    const [products,setProducts] = useState([]);
    const [items,setItem] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleButton = selectedItem => {
        // console.log(id);
        // console.log(selectedItem);
        let newItem=[];
        const exists = items.find(product=> product.id === selectedItem.id);
        if(!exists){
            newItem = [...items,selectedItem];
        }
        else{
            const rest = items.filter(product => product.id !== selectedItem.id);
            newItem = [...rest,exists];
        }
        setItem(newItem);
    }

    return (
        <div className='products-container'>
            <div className='laptop-container'>
                {
                    products.map(product =>
                        <Laptop 
                            key={product.id}
                            product={product}
                            handleButton={handleButton}
                        ></Laptop>)
                }
            </div>
            <div className='cart-container'>
                <h2>Cart Container</h2>
                <h3>Selected Item</h3>
                {
                    items.map(item=> <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Products;
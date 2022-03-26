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

    const randomSelect = () => {
        let randomItem = [];
        const picker = Math.floor(Math.random() * items.length);
        randomItem.push(items[picker]);
        setItem(randomItem);
    }

    const reset = () => {
        let resetItem = [];
        setItem(resetItem);
    }

    const handleButton = selectedItem => {
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

    const handleTrash = (product)=>{
        let trashProduct = [];
        const rest = items.filter(item=> item.id !== product.id);
        trashProduct = [...rest];
        setItem(trashProduct);
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
                <div className='sticky-div'>
                    <h2 className='cart-title'>Order Item</h2>
                    <h3 className='select-item'>Selected Item</h3>
                    {
                        items.map(item=> <Item
                            key={item.id}
                            item={item}
                            handleTrash={handleTrash}
                        ></Item>)
                    }
                    <div>
                        <button onClick={randomSelect} className='choose-random'>Choose Item Randomly</button>
                        <button onClick={reset} className='reset'>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
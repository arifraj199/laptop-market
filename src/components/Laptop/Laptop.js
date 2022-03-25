import React from 'react';
import './Laptop.css'

const Laptop = (props) => {
    const {img,name,price} = props.product;
    return (
        <div className='laptop-info'>
            <img src={img} alt="" />
            <div className='laptop-detail'>
                <p className='laptop-title'>{name}</p>
                <p className='laptop-price'>Price: {price}TK</p>
            </div>
            
        </div>
    );
};

export default Laptop;
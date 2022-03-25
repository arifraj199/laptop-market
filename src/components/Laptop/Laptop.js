import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Laptop.css';

const Laptop = (props) => {
    const {img,name,price} = props.product;
    return (
        <div className='laptop-info'>
            <img src={img} alt="" />
            <div className='laptop-detail'>
                <p className='laptop-title'>{name}</p>
                <p className='laptop-price'>Price: {price}TK</p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Laptop;
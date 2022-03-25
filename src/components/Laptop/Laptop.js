import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Laptop.css';
import Item from '../Item/Item';

const Laptop = (props) => {
    const {img,name,price,id} = props.product;
    const {product} = props;
    
    
    return (
        <div className='laptop-info'>
            <img src={img} alt="" />
            <div className='laptop-detail'>
                <p className='laptop-title'>{name}</p>
                <p className='laptop-price'>Price: {price}TK</p>
            </div>
            <button onClick={()=>props.handleButton(product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Laptop;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Item.css';

const Item = (props) => {
    // console.log(item);
    const {img,name} = props.item;
    return (
        <div>
            <div className='selected-item'>
                <img src={img} alt="" />
                <p>{name}</p>
                <FontAwesomeIcon className='item-icon' icon={faTrash}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Item;
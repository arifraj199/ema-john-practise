import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = props => {
    const {img,name,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2 className='name'>{name}</h2>
                <h3 className='price'>Price: ${price}</h3>
                <p className='manufactures'>Manufactures: {seller}</p>
                <p className='ratings '>Ratings: {ratings}star</p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
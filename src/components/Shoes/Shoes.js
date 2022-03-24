import React, { useEffect, useState } from 'react';
import OrderCart from '../Order-Cart/OrderCart';
import Product from '../Product/Product';
import './Shoes.css'

const Shoes = () => {
    const [products,setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://mocki.io/v1/e2949e35-100e-4f3d-bea4-d5b97c8cf02a')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <div className='products-section'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <OrderCart></OrderCart>
            </div>
        </div>
    );
};

export default Shoes;
import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name,price,seller,ratings,img} = props.product;
    // const product = props.product
    const addTocartHandeler = props.addTocartHandeler
   
    return (
        <div className='product-list'>
            <div className='product-content'>
                <img src={img} alt="" />
                <h1 className='name'>{name}</h1>
                <p className='price'>Price: ${price}</p>
                <p className='seller'>Manufacturer : {seller}</p>
                <p className='ratting'>Rating:{ratings} start</p>

            </div>
            <div>
                <button onClick={()=>addTocartHandeler(props.product)} className='add-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
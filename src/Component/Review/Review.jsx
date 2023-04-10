import React from 'react';
import './Review.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const Review = ({product, removeHandler}) => {
    // console.log(product)
    return (
        <div className='review-details'>
            <div className='review-img'>
                <img src={product.img} alt="" />
            </div>
            <div className='review-text'>
                <h3>Name: {product.name}</h3>
                <h3>Price ${product.price}</h3>
                <h3>Shipping ${product.shipping}</h3>
            </div>
            <button onClick={()=>removeHandler(product.id)} className="delete-item">
                <TrashIcon></TrashIcon>
            </button>
        </div>
    );
};

export default Review;
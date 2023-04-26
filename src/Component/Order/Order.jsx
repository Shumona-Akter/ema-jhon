import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import './Oder.css'
import Review from '../Review/Review';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedProduct = useLoaderData()
    const [cart, setCart] = useState(savedProduct)

    const removeHandler = (id) =>{
        const remaining = cart.filter(product => product.id !==id)
        setCart(remaining)
        removeFromDb(id)
    }
    const clearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }
    // console.log(savedProduct)
    return (
        <div className='order-main'>
             <div className="products-oder">
                <div className='review'>
                    {
                        cart.map(product => <Review
                        key={product.id}
                        product= {product}
                        removeHandler ={removeHandler}
                        ></Review>)
                    }
                </div>
            </div>
            <aside className='oder-cart'>
                <Cart cart={cart}
                clearCart = {clearCart}
                >
                    <Link to="/inventory">Order Procedure</Link>
                </Cart>
            </aside>
        </div>
    );
};

export default Order;
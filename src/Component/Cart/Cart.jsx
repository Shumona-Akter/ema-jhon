import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // step 6
    const cart = props.cart
    const clearCart = props.clearCart
    const children = props.children
    // console.log(props.cart);

    // step 7 cart jehu akta array()
    // step 8 tota parice eer variable declar

    let total = 0
    let shippig = 0
    let quantity = 0
    for (const product of cart){
        if(product.quantity === 0){
            product.quantity = 1
        }

        total = total + product.price * product.quantity
        shippig = shippig + product.shipping * product.quantity
        quantity = quantity + product.quantity

    }
    // step 9 jehutu tax looper moddhe nei
    let tax = total * 7 /100
    let GrandTotal = total + tax + shippig
    return (
        <div className='cart'>
            <h1>Selected Items: {quantity}</h1>
            <h1>Total Price: ${total}</h1>
            <h1>Total Shipping Charge: ${shippig}</h1>
            <h1>Tax:  {tax}</h1>
            <h1>Grand Total: ${GrandTotal}</h1>

            <button onClick={clearCart}>delete</button>
            {children}
        </div>
    );
};

export default Cart;
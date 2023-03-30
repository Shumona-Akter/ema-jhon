import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // step 6
    const cart = props.cart
    // console.log(props.cart);

    // step 7 cart jehu akta array
    // step 8 tota parice eer variable declar

    let total = 0
    let shippig = 0
    for (const product of cart){
        // console.log(product)
        total = total + product.price
        shippig = shippig + product.shipping

    }
    // step 9 jehutu tax looper moddhe nei
    let tax = total * 7 /100
    let GrandTotal = total + tax + shippig
    return (
        <div className='cart'>
            <h1>Selected Items: {cart.length}</h1>
            <h1>Total Price: ${total}</h1>
            <h1>Total Shipping Charge: ${shippig}</h1>
            <h1>Tax:  {tax}</h1>
            <h1>Grand Total: ${GrandTotal}</h1>
        </div>
    );
};

export default Cart;
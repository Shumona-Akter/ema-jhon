import React, { useEffect, useLayoutEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Products.css'
import { Link } from 'react-router-dom';
const Products = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const [ cart, setCart] = useState([])

    const addTocartHandeler = (product)=>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    // jokhon bowswe a load korte hobe utilty theke tokhon r akta site effet nite hobe abong akhane call hobe get item

    useEffect(()=>{
        // function call korte hbe store er jinis gulo bowser a ante
        const storedCard = getShoppingCart()
        /*
        // step 1:get the id . loop chalate hobe for in loop
        for(const id in storedCard){
            console.log(id)
            // id use kore product gulo pete find loop chalate hbe. mane id gulo pabe .
            // akta id jehutu akbar nibe tai find loop chalate heb
            // step 2: find loop
            const savedProduct = products.find(product => product.id === id)
            console.log(savedProduct)

            // step 3: get the quantity
            // const quantity = storedCard[id] third braket diye sstoredCard[id] declare korar karon hsse id akta variable stored card objecct r object theke kono variable er mane nite bracket notation bebohar kora hoy stored card[id] braket notation
            const quantity = storedCard[id]
            // quantity set korte hobe savedProduct ar savedproduct.quantityte
            savedProduct.quantity = quantity
            console.log(savedProduct)
            
        }
        */

        let saveCart = []
        for(const id in storedCard){
            const savedProduct = products.find(product => product.id === id)
            if(savedProduct){
                const quantity = storedCard[id]
                savedProduct.quantity = quantity
                saveCart.push(savedProduct)
            }
            
        }
        setCart(saveCart)


    },[products])

    const clearCart = ()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <section className='product-part'>
            <div className="products-main">
                {
                    products.map(product => <Product key={product.id}
                         product={product}
                         addTocartHandeler ={addTocartHandeler}
                         ></Product>)
                }
            </div>
            <aside className='cart-show'>
                <Cart cart={cart}
                clearCart= {clearCart}
                >
                    <Link to='oder'>Form Order</Link>
                </Cart>
            </aside>
        </section>
    );
};

export default Products;
import { getShoppingCart } from "./fakedb"

const cartLoaderProduct = async () =>{
    const loadProduc = await fetch('products.json')
    const products = await loadProduc.json()
   

    const storedCard = getShoppingCart()
    let saveCart = []
        for(const id in storedCard){
            const savedProduct = products.find(product => product.id === id)
            if(savedProduct){
                const quantity = storedCard[id]
                savedProduct.quantity = quantity
                saveCart.push(savedProduct)
            }
            
        }

    return saveCart
}
export {cartLoaderProduct}
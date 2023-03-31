import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Productitems from '../ProductItems/Productitems';
import './Shop.css';

const Shop = () => {
   const [products, setProduct] = useState([]);
   const [cart, setCart] = useState([]);

   useEffect(() => {
      fetch('products.json')
         .then(res => res.json())
         .then(data => setProduct(data))
   },[])

   useEffect(()=>{
     
    const storedCart = getShoppingCart();
    const saveCart = [];
      for(const id in storedCart){
         // console.log(id)
         const addProduct = products.find(product => product.id === id);
         if(addProduct){
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            
            saveCart.push(addProduct)

         }
         console.log(addProduct)
      }
      setCart(saveCart);
   },[products])
   const hendelAddToCard = (product) => {
      const newCart =[...cart, product];
      setCart(newCart);
      addToDb(product.id)
   }
   return (
      <nav className='shop-container'>
         <div className='product-container'>
            {
               products.map(product => <Productitems
                  key={product.id}
                  product={product}
                  hendelAddToCard = {hendelAddToCard}
               ></Productitems>)
            }
         </div>
         <div>
            <Cart cart ={cart}></Cart>
         </div>
      </nav>
   );
};

export default Shop;
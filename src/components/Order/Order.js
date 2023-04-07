import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';


const Order = () => {
   const saveCart = useLoaderData();
   const [cart, setCart] = useState(saveCart)

   const hendelRemoveCart = (id) => {
      const rimineng = cart.filter(product => product.id !== id);
      setCart(rimineng);
      removeFromDb(id)
   }
   return (
      <div className='shop-container'>
         <div className='review-container'>
            {
               cart.map(product => <ReviewItems
                  key={product.id}
                  product={product}
                  hendelRemoveCart={hendelRemoveCart}
               ></ReviewItems>)
            }
         </div>
         <div className='cart-container'>
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Order;
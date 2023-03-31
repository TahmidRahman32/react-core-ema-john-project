import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
   // console.log(cart);

   let totalPrice = 0;
   let shippingTotal = 0;
   for(const product of cart){
      totalPrice = totalPrice +  product.price;
      shippingTotal = shippingTotal + product.shipping;
   }
   const tex = totalPrice*7/100;
   const grandTotal = totalPrice + shippingTotal + tex;

   return (
      <div className='cart'>
         <h3>Product_Summary</h3>
         <p>Product Items : {cart.length}</p>
         <p>Total Price: ${totalPrice}</p>
         <p> Shopping: ${shippingTotal}</p>
         <p>Tax: ${tex.toFixed(2)}</p>
         <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      </div>
   );
};

export default Cart;
import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
   // console.log(cart);

   let totalPrice = 0;
   let shippingTotal = 0;
   let quantity = 0;
   for(const product of cart){
      product.quantity = product.quantity || 1;
      totalPrice = totalPrice +  product.price * product.quantity;
      shippingTotal = shippingTotal + product.shipping;
      quantity = quantity + product.quantity
   }
   const tex = totalPrice*7/100;
   const grandTotal = totalPrice + shippingTotal + tex;
    

   return (
      <div className='cart'>
         <h3>Product_Summary</h3>
         <p>Product Items : {quantity}</p>
         <p>Total Price: ${totalPrice}</p>
         <p> Shopping: ${shippingTotal}</p>
         <p>Tax: ${tex.toFixed(2)}</p>
         <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      </div>
   );
};

export default Cart;
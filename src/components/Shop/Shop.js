import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Productitems from '../ProductItems/Productitems';
import './Shop.css';

const Shop = () => {
   const [products, setProduct] = useState([]);
   const [cart, setcart] = useState([]);

   useEffect(() => {
      fetch('products.json')
         .then(res => res.json())
         .then(data => setProduct(data))
   },[])
   const hendelAddToCard = (product) => {
      const newcart =[...cart, product];
      setcart(newcart);
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
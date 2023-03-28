import React, { useEffect, useState } from 'react';
import Productitems from '../ProductItems/Productitems';
import './Shop.css';

const Shop = () => {
   const [products, setProduct] = useState([]);

   useEffect(() => {
      fetch('products.json')
         .then(res => res.json())
         .then(data => setProduct(data))
   },[])
   return (
      <nav className='shop-container'>
         <div className='product-container'>
            {
               products.map(product => <Productitems
                  key={product.id}
                  product={product}
               ></Productitems>)
            }
         </div>
         <div>
            <h3>product summary</h3>
         </div>
      </nav>
   );
};

export default Shop;
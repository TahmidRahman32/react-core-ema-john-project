import React from 'react';
import './Productitem.css';

const Productitems = (props) => {
   // console.log(props.product)
   const { name, seller, price, img, ratings } = props?.product || {};
   return (
      <div className='product-items'>
         <img src={img} alt="" />
         <div className='product-info'>
            <h6 className='product-name'>Name: {name}</h6>
            <p>Price: ${price}</p>
            <p><small>Seller : {seller}</small></p>
            <h5> Ratings: {ratings}</h5>
         </div>
         <button className='btn-card'>Add to Card</button>

      </div>
   );
};

export default Productitems;
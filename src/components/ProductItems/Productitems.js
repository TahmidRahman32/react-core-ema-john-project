import React from 'react';
import './Productitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Productitems = (props) => {
   // console.log(props)
   const { name, seller, price, img, ratings } = props?.product || {};
   const hendelAddToCard = props.hendelAddToCard;

  

   return (
      <div className='product-items'>
         <img src={img} alt="" />
         <div className='product-info'>
            <h6 className='product-name'>Name: {name}</h6>
            <p>Price: ${price}</p>
            <p><small>Seller : {seller}</small></p>
            <h5> Ratings: {ratings}</h5>
         </div>
         <button onClick={() => hendelAddToCard(props.product)} className='btn-card'>
            Add to Card
            <FontAwesomeIcon icon={faShoppingCart} />
         </button>

      </div>
   );
};

export default Productitems;
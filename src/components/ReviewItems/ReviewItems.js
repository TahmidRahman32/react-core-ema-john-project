import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({ product, hendelRemoveCart }) => {
   console.log(product)
   const { id, name, price, quantity, img } = product;
   return (
      <div className='review-Item'>
         <img src={img} alt="" />
         <div className='review-detail'>
            <p className='product-title'>{name}</p>
            <p>Price: <span className='color-price'>${price}</span></p>
            <p>Quantity: <span className='color-price'>{quantity}</span></p>
         </div>
         <button onClick={() => hendelRemoveCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashCan} /></button>
      </div>
   );
};

export default ReviewItems;
import React, { useState } from 'react';
import { useStateValue } from '../../contextApi/StateProvider';

const Checkoutmodal = ({title,image,price,color,size,basketId}) => {

  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        basketId:basketId,
    })
  }

  return (
    <>
          <div className="modalBody">
           
          <div className="modalProduct">
              <img className="ModalproductImage" 
              src={image} alt="" />
              <div className="productName">
                  <h5>Name:  { title }</h5>
                  <h5>Color:  { color }</h5>
                  <h5>Size:   { size }</h5>
              </div>
              <div className="priceAndAddRemove">
                  <h4>${price}</h4>
                  <button className="AddToCartButton" onClick={removeFromBasket}>Remove</button>
              </div>
          </div>
      </div>
   </>   
  );
}

export default Checkoutmodal

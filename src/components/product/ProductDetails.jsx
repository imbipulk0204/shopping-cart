import React from 'react';
import './product.css'

import Productheader from './productHeader';
import Products from './Products';
const Productdetails = () => {
    return (
        <div className="productDetails">
            <Productheader />
            <Products />
        </div>
    );
}

export default Productdetails;

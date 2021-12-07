import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const Productheader = () => {
    return (
            <div className="productHeader">
                <div className="proLeft bg">
                    <span className="bg homeColor">Home</span>/ Prodcut details
                </div>
                <div className="proCenter bg"> 
                    Product Details
                </div>
                <div className="proRight bg">
                      <h6 className="bg"> Next Prodcut</h6>
                      <ChevronLeftIcon className="bg iconLeft" />
                     <ChevronRightIcon className="bg iconRight" />
                </div>
            </div>
    );
}

export default Productheader;

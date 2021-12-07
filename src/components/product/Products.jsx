import React, { useState } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {data} from '../../dummyData'
import Singleproduct from './SingleProduct'
const Products = () => {
    const [dummyData,setDummyData]=useState(data);
    const [defaultData,setDefaultData]=useState(data[0])
    

    return (
        <>
        <Singleproduct 
        id={defaultData.id}
        title={defaultData.title}
        desc={defaultData.desc}
        descLong={defaultData.descLong}
        price={defaultData.price}
        imageProduct={defaultData.image}
        rating={defaultData.rating}
        size={defaultData.size}
        color={defaultData.color}

        />
        <div className="productList">
            <div className="productHeaderTwo">
                <h3>Related Product</h3>
                <div className="showing">
                    <h5 className="textShow">Showing 1-12 of 36 results</h5>
                    <select className="select">
                        <option selected disabled>Default sorting</option>
                        <option value=""> sorting One</option>
                        <option value=""> sorting Two</option>
                    </select>
                </div>
            </div>
            <div className="listMain">
        {
           dummyData.map((items)=>{
               return(
                    <div className="itemsLists">
                         <div className="headText">
                                <div className="textOne">
                                    <h5>Logo</h5>
                                </div>
                                <div className="textTwo">
                                <ShoppingBasketIcon />
                                </div>
                        </div>  
                        
                                    <div className="imageList">
                                        <img className="productImageMain" src={items.image} alt="altt" />
                                        <h4>{items.title}</h4>
                                        <h4>$ {items.price}</h4>
                                        <div className="buttonDivAddPro">
                                                
                                                <button className="AddToCartButtonToCart" onClick={()=>{
                                                    setDefaultData(data[items.id])
                                                    window.scrollTo({top:0, behavior:"smooth"})
                                                }
                                                  }
                                                    >view</button>
                                            
                                              
                                         </div>    
                                    </div> 
                    </div>
               )
            })
        }
        </div> 
            
        </div>
      </>
    );
}

export default Products;

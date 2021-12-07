import React, { useEffect, useState } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import CloseIcon from '@material-ui/icons/Close'
import Modal from 'react-modal';

import './header.css'
import { Badge } from '@material-ui/core';
import { useStateValue } from '../../contextApi/StateProvider'
import {getBasketTotal} from '../../contextApi/reducer'
import Checkoutmodal from '../product/CheckOutModal';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


const Header = () => {
    const [{basket},dispatch]=useStateValue();
    const [openModal,setOpenModal]=useState(false);
    const [closeModal,setCloseModal]=useState(false)
   
    const checkModalIsEmpty=()=>{
         if(basket.length===0) {
              alert("Please add some Item to cart")
         }else{
            setOpenModal(!openModal) 
         }
    }

    return (
        <div className="header">
            <div className="headerLeft">
                <h1>Shophub</h1>
            </div>
            <div className="headerCenter">
                <div className="headereText">

                    <div className="home headerAll">
                        <h5>Home</h5>
                    </div>
                    <div className="shop headerAll">
                        <h5>Shop</h5>
                    </div>
                    <div className="blog headerAll">
                        <h5>Blog</h5>
                    </div>
                    <div className="contact headerAll">
                        <h5>Contact</h5>
                    </div>
                </div>

            </div>
            <div className="headerRight">
                <span className="headerRightMoney" decimal="2">${getBasketTotal(basket)}</span>
                <div className="shoppingCart">
                    
                    <Badge badgeContent={basket.length} color="primary" >
                        <ShoppingBasketIcon onClick={checkModalIsEmpty} />
                    </Badge>
                
                </div>
            </div>
            {/* modal */}

                    <Modal
                    isOpen={openModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                > 
                    <div className="modal">
                        <div className="modalTop">
                            <h2>Check out</h2>
                            <CloseIcon onClick={()=>setOpenModal(!openModal)} />
                        </div>
                        <div className="modalBodyMain">
                        {
                            basket.map((items)=>{
                                return(
                                <>

                                    <Checkoutmodal
                                    title={items.title}
                                    image={items.image}
                                    price={items.price}
                                    color={items.color}
                                    size={items.size}
                                    basketId={items.basketId}
                                    />

                                <hr />
                                </>
                            )})
                        }
                        
                        
                        </div>
                    </div>
                    <div className="subotal">
                        <h4>Total Item ({basket.length})</h4>
                        <h4>${getBasketTotal(basket)}</h4>
                        <div className="buttonDivCheckOut">
                                 <button className="AddToCartButtonCheckOut">CheckOut</button>
                        </div>
                    </div>
                </Modal>

            {/* modal */}
        </div>
    );
}

export default Header;

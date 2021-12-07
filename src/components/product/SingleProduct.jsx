import React,{useState} from 'react';
import image from  './image/p1.png'
import Rating from '@mui/material/Rating';
import { useStateValue } from '../../contextApi/StateProvider'

const Singleproduct = ({id,title,desc,descLong,price,imageProduct,size,color,rating}) => {
    const [{basket},dispatch]=useStateValue();
    const numberOfItems=[1,2,3]

    const [productColor, setProductColor] = useState('');
    const [productSize, setProductSize] = useState();

    const addToCart=(e)=>{
        e.preventDefault()
            if(!productColor){
                alert("please select color")
            }else if(!productSize){
                    alert("please select size")
            }else{
                dispatch({
                    type: 'ADD_TO_BASKET',
                    item:{
                        id:id,
                        title:title,
                        image:imageProduct,
                        price:price,
                        rating:rating,
                        color:productColor,
                        size:productSize,
                    },
                })
                setProductColor('')
                setProductSize('')
            }
    }
   
    return (
        <div className="singleProdcutbody">
            <div className="prodcutWrapper bgP">

                <div className="productLeftItem bgP">
                        <h4 className="headerText bgP">{desc}</h4>
                        <p className="leftPtext bgP">{descLong}</p>
                        <div className="produtItems">
                            {
                                numberOfItems.map((number)=>{
                                    return(
                                    <div className="items" key={number}>
                                        <img className="leftImage" src={imageProduct} alt="alt" />
                                    </div>
                                    )
                                })
                            }
                        </div>
                </div>
                <div className="productCenterItem bgP">
                    <div className="ImageDiv">
                        <img className="productImage" src={imageProduct} alt="img" />
                        <span className="price">${price}</span>
                    </div>

                </div>
                <div className="productRightItem bgP">
                        <div className="review bgP">
                            <h5 className="bgP">Review:</h5>
                                <Rating className="star bgP" name="no-value" value={rating} />
                                <h5 className="bgP">{rating}(60)</h5> 
                        </div>
                        <div className="color">
                            <h5>Color: </h5>

                            {
                                color.map((colors)=>{
                                    return(
                                        <> 
                                <span className={`colorInner ${colors} `} key={colors}>
                                    <span className="colorInnerOne">
                                        <span className={`colorInnerOneTwo ${colors}`} onClick={()=>setProductColor(colors)}
                                        ></span>
                                    </span>
                                </span>
                                    </>
                                    )    
                                })
                            }

                        </div>
                        <div className="size">
                            <h5>size:</h5>
                            {
                                size.map((sizes)=>(<span className="sizeInner" onClick={()=>setProductSize(sizes)}>{sizes}</span>))
                            }

                        </div>
                           
                        <div className="buttonDiv">
                                <button className="AddToCartButton" onClick={(e)=>addToCart(e)}>Add to Cart</button>                                        
                        </div>
                                                                        
                </div>
            </div>
        </div>
    );
}

export default Singleproduct;

export const initialState={
    basket:[],
    
};

//selector
export const getBasketTotal=(basket)=>{
    // const fn = (total, { price, qty }) => total + price * qty;
   const totalAmount= basket?.reduce((amount,item)=>item.price + amount ,0)
   console.log("total amount:",totalAmount)

//    return totalAmount;
   return (Math.round(totalAmount * 100) / 100).toFixed(2);

}




const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET': 
            const newItem={...action.item,basketId:new Date().getTime()}
                return {
                    ...state,
                    basket:[...state.basket,newItem],
                    
                };
                
        case 'REMOVE_FROM_BASKET':
            const newBasket=state.basket.filter(e=> e.basketId !== action.basketId);
              return{
                  ...state,
                  basket: newBasket,
              }


        case 'EMTY_BASKET':
                return{
                    ...state,
                    basket:[]
                }  
        case 'SET_USER': 
                return{
                    ...state,
                    user:action.user,
                }           
        default :
            return state;
    }
};




export default reducer;
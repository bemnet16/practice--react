import React, { useReducer } from "react";

const CartContext = React.createContext({
    cartState:[],
    cartDispatch:()=>{},
    products:[],
    resetProduct: ()=>{}
});



const cartReducer = (state,action) => {


    switch (action.type) {
        case "ADD":{
            const alreadyIn = state.foods.find(cart => cart.id === action.val.id)
            if(alreadyIn){
                const temp = state.foods.map(food =>{
                    if(food.id === action.val.id){
                        return {...food, amount:action.amount}
                    }
                    return food
                }) 
                const total = state.quantity - alreadyIn.amount + action.amount
                return {foods:[...temp], quantity:total}           
            }
            return {foods:[action.val, ...state.foods], quantity:state.quantity+action.amount}
        }
        case "ADD_AMOUNT":{
            const temp = state.foods.map(food =>{
                if( food.id === action.val.id){
                    return {...food, amount:food.amount+1}
                }
                return food
            })
            return {foods:[...temp],quantity:state.quantity+1}
            }
        case "REMOVE_AMOUNT":{
            let idx = -1
            let temp = state.foods.map((food,index) =>{
                if( food.id === action.val.id){
                    if(food.amount-1 <=0 ){
                        idx = index
                    }
                    return {...food, amount:food.amount-1}
                }
                return food
            })
            if(idx !== -1){
                temp = temp.filter((food,index)=> idx !== index)
            }
            return {foods:[...temp],quantity:state.quantity-1}
            }
        default: return {}
    }
    

}

export const CartContextProvider = props => {

    const [cartState,cartDispatch] = useReducer(cartReducer,{foods:[],quantity:0})

    return(
        <CartContext.Provider value={{cartState, cartDispatch}}>
            {props.children}
        </CartContext.Provider >
    )
}

export default CartContext;
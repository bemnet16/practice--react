import React, { useContext } from 'react'
import CartContext from '../context/cart-context'

const CartItem = props => {

    const cartCtx = useContext(CartContext)

    const addFoodAmount = () =>{
        cartCtx.cartDispatch({type:"ADD_AMOUNT",val:props.food})
        //  cartCtx.resetProduct(props.food.id)
    }

    const removeFoodAmount = () =>{
        cartCtx.cartDispatch({type:"REMOVE_AMOUNT",val:props.food})
        //  cartCtx.resetProduct(props.food.id)
    }
    
   
    return (
        <div className='w-100 d-flex justify-content-between rounded-top-4 p-2 m-2' style={{ borderBottom:"1px solid rgba(0,0,0,0.2)"}}>
            <div>
            <h5>{props.food.title}</h5>
            <h6 className='text-warning'>${props.food.price} <span className='border border-info px-2 rounded-1 text-dark ms-4'>x{props.food.amount}</span></h6>
            </div>
            <div>
            <button onClick={addFoodAmount} className='btn border border-warning border-2 mx-2'>+</button>
            <button onClick={removeFoodAmount} className='btn border border-warning border-2'>-</button>
            </div>
        </div>
  )}

export default CartItem
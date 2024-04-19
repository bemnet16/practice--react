import React, { useContext, useEffect, useState } from 'react'
import CartItem from './cartItem'
import CartContext from '../context/cart-context'
import AuthContext from '../context/auth-context'

const CartList = () => {

    const cartCtx = useContext(CartContext)
    const authCtx = useContext(AuthContext)
    const [totalPrice,setTotalPrice] = useState(0)


    const onOrder = () =>{
        console.log("ordering...")
        authCtx.onHandleCart()
    } 

    useEffect(()=>{
        let tot = 0
        cartCtx.cartState.foods.forEach(food => {
            tot += (food.price * food.amount)
        })
        setTotalPrice(tot.toFixed(2))
    },[cartCtx])


   return (
    <>
    <div
    style={{
        position:"fixed",
        top:"0",
        left:"0",
        height:"100vh",
        width:"100vw",
        background:"rgba(30,30,30,0.8)",
        cursor:"pointer"
    }}
    onClick={authCtx.onHandleCart}
    />
    <div 
        style={{
            position:"fixed",
            left:"50%",
            top:"50%",
            transform:"translateX(-50%) translateY(-50%)"
        }}
    className='bg-white rounded-4 p-3 w-50 mx-auto mb-5'>
        {
        cartCtx.cartState.foods.map(food =>{
            return <CartItem food={food} key={food.id}/>
        })
        }
        <div className='d-flex justify-content-between'>
        <h4 className=''>Total Amount</h4>
        <h4>${totalPrice}</h4>
        </div>
        <div className='text-end my-1'>
        <button onClick={authCtx.onHandleCart} className='btn border border-2 border-warning rounded-5 px-3 mx-2'>close</button>
       {cartCtx.cartState.foods.length > 0 && <button onClick={onOrder} className='btn btn-info text-white rounded-5 px-3 '>order</button>}
        </div>
    </div>
        </>
  )
}

export default CartList
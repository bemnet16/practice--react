import React, { useContext} from 'react'
import Products from './products'
import AuthContext from '../context/auth-context'
import CartList from './cartList'
import CartContext from '../context/cart-context'

function LoggedIn() {

const authCtx = useContext(AuthContext)
const cartCtx = useContext(CartContext)
const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
      <nav className='bg-info d-flex justify-content-between px-4 pt-3 mb-3'>
        <h2 className='text-light border py-3 px-3 rounded-circle'>Order Your <span className='text-warning'>FOOD</span>!</h2>
        <ul className='d-flex justify-content-between pb-0'>
          <div onClick={authCtx.onHandleCart} style={{cursor:"pointer", height:"55px"}} className='bg-dark bg-opacity-75 h6 px-5 py-3 me-5 rounded-5 text-center text-white'>Your Cart <span className='bg-info bg-opacity-75 p-2 px-3 text-center m-1 rounded-5'>{cartCtx.cartState.quantity}</span></div>
          <div className='text-center'>
          <h6>{user? user.email : ""} </h6>
         <button onClick={authCtx.onLogOut} className='btn btn-info text-white mb-2'> Log Out</button>
          </div>
        </ul>
      </nav>
      <div className='container w-50 bg-dark border border-5 border-warning text-white rounded-2 p-3 mb-4 text-center'>
        <h3>Delicious Food, Delivery To You</h3>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All meals are cooked with high-quality ingredients, just-in-time and of course by experianced chief!</p>
      </div>
      {authCtx.isCart && <CartList />}
      <Products />
    </div>
  )
}

export default LoggedIn
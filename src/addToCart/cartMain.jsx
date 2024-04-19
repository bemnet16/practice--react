import React, { useContext, useEffect } from 'react'
import LoggedIn from './components/loggedIn'
import LoggedOut from './components/loggedOut'
import AuthContext from './context/auth-context'

function CartMain() {

const authCtx = useContext(AuthContext);

useEffect(()=>{
    const log = JSON.parse(localStorage.getItem("user"))
    if(log){
        authCtx.onLogIn(log)
    }
},[authCtx])

return (
   <>
    {authCtx.isLoggedIn && <LoggedIn />}
    {!authCtx.isLoggedIn && <LoggedOut />}
    </>
  )
}

export default CartMain
import React, { useState } from "react"

const AuthContext = React.createContext({
    isLoggedIn:false,
    isCart:false,
    onLogIn:(user)=>{},
    onLogOut: ()=>{},
    onHandleCart: ()=>{},
})


export const AuthContextProvider = props => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [isCart,setIsCart] = useState(false)

    const handleLogIn = (user) =>{
        localStorage.setItem("user",JSON.stringify(user))
        setIsLoggedIn(true)
    }

    const handleLogOut = () =>{
        localStorage.removeItem("user")
        setIsLoggedIn(false)
    }

    const handleCart = () =>{
        setIsCart(!isCart)
    }

    return(
        <AuthContext.Provider value={{isLoggedIn, onLogIn:handleLogIn, isCart, onLogOut:handleLogOut, onHandleCart:handleCart}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
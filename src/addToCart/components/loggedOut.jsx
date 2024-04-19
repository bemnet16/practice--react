import React, { useContext, useState } from 'react'
import AuthContext from '../context/auth-context'
import useHttp from '../hooks/use-http'
import useInput from '../hooks/use-input'

function LoggedOut() {

    const {value:name, isValueValid:isName, valueChangeHandler:nameChangeHandler, blurChaneHandler:nameBlurHandler, isInpInvalid:isNameInputInValid} = useInput(value => value.trim() !== "")
    
    const {value:email, isValueValid:isEmail, valueChangeHandler:emailChangeHandler, blurChaneHandler:emailBlurHandler, isInpInvalid:isEmailInputInvalid} = useInput(value => value.includes("@"))

    const {value:password, isValueValid:isPassword, valueChangeHandler:passwordChangeHandler, blurChaneHandler:passwordBlurHandler, isInpInvalid:isPasswordInputInvalid} = useInput(value => value.length >= 4)
    
    const authCtx = useContext(AuthContext)
    const [isRegisterd,setIsRegisterd] = useState(false)
    const [emailExist,setEmailExist] = useState(false)
    const [incorrectEmail,setIncorrectEmail] = useState(false)
    const sendRequest = useHttp()
    
    const isFormInvalid = isRegisterd? !isEmail || !isPassword : !isName ||  !isEmail || !isPassword

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isRegisterd){
            logInUser()
        }else{
            addNewUser()
        }
    }

    const addNewUser = async () => {
        const res = await sendRequest({url: `http://localhost:8001/users?email=${email}`})
        if(res.length === 1){
            setEmailExist(true)
        }else{
           const saveUser = await  sendRequest({
                url:"http://localhost:8001/users",
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: {name ,email, password}
            })
            authCtx.onLogIn({...saveUser})
       }
    }

    const logInUser = async() => {
        const res = await sendRequest({url: `http://localhost:8001/users?email=${email}&password=${password}`})
        if(res.length === 0){
            setIncorrectEmail(true)
        }else{
            authCtx.onLogIn(res[0])
        }
    }

    const handleServerError = () => {
        setEmailExist(false)
        setIncorrectEmail(false)
    }

    const labelCss = 'h4 w-100 text-start p-2 m-2 text-white'
    const nameInpCss = !isNameInputInValid ? 'w-75 mb-2 p-2 rounded-2 border border-warning border-2' : 'w-75 mb-2 p-2 rounded-2 border border-warning border-2 bg-warning' 
    const emailCss = !isEmailInputInvalid ? 'w-75 mb-2 p-2 rounded-2 border border-warning border-2' : 'w-75 mb-2 p-2 rounded-2 border border-warning border-2 bg-warning' 
    const passCss = !isPasswordInputInvalid ? 'w-75 mb-2 p-2 rounded-2 border border-warning border-2' : 'w-75 mb-2 p-2 rounded-2 border border-warning border-2 bg-warning' 


    return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", backgroundColor:"rgb(25, 138, 153)"}}>
        <form onSubmit={handleSubmit}  className='w-50 bg-info rounded-4 p-2 text-center'>


            {!isRegisterd && <label className={labelCss} htmlFor="name">Name : </label>}
           {!isRegisterd && <input className={nameInpCss} type="text" id='name' onChange={nameChangeHandler} value={name} onBlur={nameBlurHandler} />}
           {!isRegisterd && isNameInputInValid && <p className='text-warning'>Please enter valid name</p>}


            <label className={labelCss} htmlFor="email">Email : </label>
            <input className={emailCss} type="email" id='email' onChange={emailChangeHandler} value={email} onBlur={emailBlurHandler} onFocus={handleServerError} />
           {isEmailInputInvalid && <p className='text-warning'>Please enter valid email</p>}


            <label className={labelCss} htmlFor="password">Password : </label>
            <input className={passCss} type="password" onChange={passwordChangeHandler} value={password} onBlur={passwordBlurHandler} onFocus={handleServerError}/>
           {isPasswordInputInvalid && <p className='text-warning'>Please enter valid password</p>}


            <br />
            <button className='btn btn-primary w-25 mt-3 p-2' disabled={isFormInvalid}> {isRegisterd?"log in":"register"}</button>
        <span onClick={() => setIsRegisterd(!isRegisterd)} className='btn btn-info w-25 mt-3 p-2 mx-2'>{isRegisterd?"register?":"log in?"}</span>
        {emailExist && <p style={{color:"red", fontSize:"23px" }}>email already exist!</p>}
        {incorrectEmail && <p style={{color:"red", fontSize:"23px" }}>Incorrect email or password!</p>}
        </form>
    </div>
  )
}

export default LoggedOut
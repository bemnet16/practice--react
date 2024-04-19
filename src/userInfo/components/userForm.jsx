import React, { useEffect, useState,useReducer } from 'react'
import ReactDOM  from 'react-dom'
import AlertBox from './alertBox'
// import DemoContext from '../../context/demo-context'


const  errorReducer = (state,action) =>{
    if(action.type === "NAME"){
        return {...state, name:action.name}
    }else if(action.type === "AGE"){
        return {...state, age:action.age}
    }else if(action.type === "RESET"){
        return 
    }
    return {}
}

const  UserForm = (props) => {

    // const ctx = useContext(DemoContext)
    const [inps,setInps] = useState({name:"", age:""})
    // const [errorMsg,setErrorMsg] = useState()
    const [stateError,dispatchError] = useReducer(errorReducer)
    const [isUpdate,setIsUpdate] = useState(false)

    useEffect(()=>{
        if(props.user)setIsUpdate(true)
        setInps({name:props.user?props.user.name:"", age:props.user?props.user.age:""})
    },[props.user])

    const handleChange = (e) =>{
            setInps({...inps, [e.target.name]:e.target.value})
        }
        
    const handleSubmit = (e) => {
        e.preventDefault()            
        if(inps.name.trim().length === 0 || (inps.age <= 0 || inps.age > 31)){
            if(inps.age <= 0){
                dispatchError({type:"AGE",  age:"age can't less than 1"})
            }else if(inps.age > 31){
                dispatchError({type:"AGE",  age:"age can't greater than 31"})
            }
            if(inps.name.trim().length === 0){
                dispatchError({type:"NAME", name:"Username can't be empty!"})
            }
        }else if(isUpdate){
            // ctx.dispatchEdit({type:"UPDATE", val:inps})
            props.onUpdateUser(props.user.id,inps)
            setInps({name:"",age:""})
            setIsUpdate(false)
        }else{
            props.onAddNewUser(inps)
            setInps({name:"",age:""})
        }
    }

    const hanldeAlert = () =>{
        dispatchError({type:"RESET"})
    }

  return (
    <>
    <form  onSubmit={handleSubmit}  className='container w-50 p-2 my-4 bg-white rounded-3'>
        <label className='container w-100' htmlFor="name">
            <h5 >name</h5>
            <input className='border border-2 border-opacity-25 border-secondary py-1 px-2 mb-2 w-100' name='name' type="text" value={inps.name} onChange={handleChange} />
        </label>
        <br />
        <label className='container w-100' htmlFor="age">
            <h5 >age(years)</h5>
            <input className='border border-2 border-opacity-25 border-secondary py-1 px-2 mb-2 w-100' name='age' type="number" onChange={handleChange} value={inps.age} />
        </label>
        <br />
        <button className='btn btn-warning  m-1 mx-2 px-4'>Add User</button>
    </form>

        {!!stateError && ReactDOM.createPortal(<AlertBox onDisAlert={hanldeAlert} msg={stateError}/>,document.getElementById("error"))}
    </>
  )
}

export default UserForm
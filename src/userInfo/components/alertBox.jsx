import React from 'react'

const AlertBox = (props) => {

  return (
    <div className='position-fixed container-fluid h-100 bg-secondary bg-opacity-75 d-flex justify-content-center align-items-center'  style={{top:"0", left:"0"}}>
      <div onClick={props.onDisAlert} className='container-fluid position-absolute w-100 h-100'/>
       <div  className='contanier w-50 position-absolute bg-white rounded-4'>
        <div className='p-3 rounded-top-4 h2 text-white' style={{backgroundColor:"purple"}}>Invalid Input</div>
        <h6 className='container h-25 bg-white p-3'>  - {props.msg.age} - {props.msg.name} </h6>
        <div className='text-end'>
        <button onClick={props.onDisAlert}  className='btn m-3 mt-5 px-5 text-white' style={{backgroundColor:"purple"}}>Okay</button>
        </div>
       </div>
        </div>

  )
}

export default AlertBox
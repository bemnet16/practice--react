import React from 'react'
// import DemoContext from '../../context/demo-context'

function UserCard(props) {

    // const ctx = useContext(DemoContext)
    
    const deleteUser = () => {
        props.onDeleteUser(props.user.id)
    }
    
    const editInfo = () =>{
        // ctx.dispatchEdit({type:"SET_ID", id:props.user.id})
        props.onEditInfo(props.user.id)
    }

  return (
     <div className=' border border-2 border-secondary border-opacity-25 p-2 mx-3 my-2 d-flex justify-content-between'> 
        <h6>{props.user.name} - {props.user.age} (Years old)</h6>
        <div>
        <span onClick={editInfo} className='text-info p-0 m-0 me-2' style={{cursor:"pointer", fontSize:"21px", fontWeight:"bolder"}}>&#x270F;</span>
        <span onClick={deleteUser} className='text-warning p-0 m-0' style={{cursor:"pointer", fontSize:"21px", fontWeight:"bolder"}}>&#x1F5D1;</span>
        </div>
     </div>
  )
}

export default UserCard
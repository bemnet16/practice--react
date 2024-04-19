import React from 'react'
import UserCard from './userCard'

function UserLIst(props) {


    const deleteUser = (id) => {
        props.onDeleteUser(id)
    }


    const editInfo = (id)=>{
        props.onEditInfo(id)
    }

    if(props.users.length === 0){
        return <div></div>
    }
  return (
    <div className='container w-50 p-2 my-4 bg-white rounded-3 '>
        {
            props.users.map((user) =>{
                return <UserCard onDeleteUser={deleteUser} onEditInfo={editInfo} user={user} key={user.id}/>
            })
        }
    </div>
  )
}

export default UserLIst
import React, { useState} from 'react'
import UserForm from './components/userForm'
import UserLIst from './components/userLIst'
// import DemoContext from '../context/demo-context'

// const editReducer = (state,action) => {
//     if(action.type === "SET_ID"){
//         return {id:action.id}
//     }else if(action.type === "UPDATE"){
//         return {...state, ...action.val}
//     }
//     return {}
// }

function UserInfoMain() {

    const [users,setUsers] = useState([]);
    const [editUser,setEditUser] = useState()
    // const [stateEdit,dispatchEdit] = useReducer(editReducer)


    // useEffect(()=>{
    //     console.log("eddddit",stateEdit)
    //      const user = users.find(user => user.id ===stateEdit.id)
    // setEditUser({...user})
    // },[stateEdit])

    const addUser = (new_user) => {
        const user = {...new_user,id:Math.random()}
        setUsers((pre)=>{
            return [user, ...pre]
        })
    }

const deleteUser = (id) => {
    const reUsers = users.filter((user) => user.id !== id)
    setUsers([...reUsers])
}

const editInfo = (id) => {
    const user = users.find(user => user.id === id)
    setEditUser({...user})
}

const  updateInfo = (id,info) => {
    const temp = users.map(user =>{
        if(user.id === id){
            return {...info, id:id}
        }
        else{
            return user
        }
    })
    setUsers([...temp])
}

  return (
    < >
    {/* <DemoContext.Provider value={{dispatchEdit}}> */}
        <UserForm onAddNewUser={addUser} user={editUser}  onUpdateUser={updateInfo}/>
        <UserLIst onDeleteUser={deleteUser} onEditInfo={editInfo} users={users} />
    {/* </DemoContext.Provider> */}
    </>
  )
}

export default UserInfoMain
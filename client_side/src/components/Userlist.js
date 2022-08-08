import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers } from '../action/UserAction'
import Loading from '../components/Loading';
import Error from '../components/Error';
import { FaTrash } from 'react-icons/fa';


const Userlist = () => {
  const dispatch = useDispatch()
  const userState = useSelector(state=> state.getAllUsersReducer)

  const {loading , error, users} =  userState;

  

    useEffect(() => {

        dispatch(getAllUsers())
    
      }, [])
  return (
    <div>
      <h1>Users list</h1>
      {loading && (<Loading />)}
        {error && (<Error error='somenthing went wrong'/>)}
        <table className='table table-bordered table-responsive-sm'>
           <thead className='thead-dark'>
         <tr className="table-dark">
             <th>User Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>Delete</th>
         </tr>
           </thead>

           <tbody>
               {users && users.map(user=>{
                   return <tr>
                       <td>{user._id}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td><FaTrash onClick={()=>{dispatch(deleteUser(user._id))}}/></td>
                   </tr>
               })}
           </tbody>

       </table>
    </div>
  )
}

export default Userlist
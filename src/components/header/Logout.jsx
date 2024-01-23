import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'

function Logout() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler} className='inline-block px-2 py-6 duration-200'>Logout</button>
  )
}

export default Logout

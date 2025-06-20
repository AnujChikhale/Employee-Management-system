import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  
  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data.name)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeuser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end text-white justify-between'>
      <h1 className='text-4xl font-medium'>Hello <br /> <span className='font-semibold'>name </span></h1>
      <button onClick={logOutUser} className='bg-red-500 px-4 py-2 rounded-2xl font-medium'>Log out</button>
    </div>
  )
}

export default Header
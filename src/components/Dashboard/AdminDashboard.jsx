import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-full w-full p-10 bg-[#1C1C1C] text-white '>
        <Header changeuser={props.changeuser}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
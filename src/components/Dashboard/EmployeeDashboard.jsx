import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <>
    <div className='h-screen w-full px-8 py-12 bg-[#1C1C1C] overflow-auto'>
      <h1>{props.id}</h1>
        <Header changeuser={props.changeuser} data={props.data}/>
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
    </>
  )
}

export default EmployeeDashboard
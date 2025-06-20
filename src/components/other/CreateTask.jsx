import React, { useContext, useState } from 'react'
import AuthProvider, { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setuserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')

  const [newtask, setnewtask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()

    setnewtask({taskTitle,taskDescription,taskDate,category,active:false,failed:false,newTask:true,completed:false,})
    
    const data = userData
    console.log(data)
    
    data.forEach(function(elem){
      if(assignTo == elem.name){
        elem.tasks.push(newtask)
        elem.taskCounts.newTask = elem.taskCounts.newTask+1
      }
    })
    setuserData(data)


    setassignTo('')
    setcategory('')
    settaskTitle('')
    settaskDescription('')
    settaskDate('')
    
  }

  return (
    <div className='mt-10'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <h3 className='text-xl'>Task Title</h3>
            <input 
             value={taskTitle}
             onChange={(e)=>{
              settaskTitle(e.target.value)
             }}
             type="text" placeholder='Make UI design' className='w-full bg-slate-800 p-3 rounded-xl mt-2' />
            <h3 className='text-xl mt-2'>Description</h3>
            <textarea 
            value={taskDescription}
             onChange={(e)=>{
              settaskDescription(e.target.value)
             }}
            name="" id="" placeholder='Write your description here' className='w-full bg-slate-800 p-3 rounded-xl mt-2'></textarea>
            <h3 className='text-xl mt-2'>Date</h3>
            <input 
            value={taskDate}
             onChange={(e)=>{
              settaskDate(e.target.value)
             }}
            type="date" className='bg-slate-800 p-3 w-full rounded-xl mt-2' />
            <h3 className='text-xl mt-2'>Assign to</h3>
            <input 
            value={assignTo}
             onChange={(e)=>{
              setassignTo(e.target.value)
             }}
            type="text" className='bg-slate-800 w-full rounded-xl p-3 mt-2' placeholder='employee name'/>
            <h3 className='text-xl mt-2'>Category</h3>
            <input 
            value={category}
             onChange={(e)=>{
              setcategory(e.target.value)
             }}
            type="text" className='bg-slate-800 p-3 mt-2 rounded-xl w-full' placeholder='design,dev,etc.' />
            <button className='bg-green-400 font-semibold px-6 py-4 mt-6 rounded-2xl ml-[45%]'>Create Task</button>
          </form>
        </div>
  )
}

export default CreateTask
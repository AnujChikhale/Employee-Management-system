import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='overflow-x-auto flex mt-10 screen justify-between gap-5 text-white'>
        <div className='px-10 py-6 h-60 w-[45%] bg-red-400 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-10 py-6 h-60 w-[45%] bg-blue-400 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='px-10 py-6 h-60 w-[45%] bg-yellow-400 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='px-10 py-6 h-60 w-[45%] bg-green-400 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
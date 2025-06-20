import React from 'react'

const AcceptTask = ({data}) => {
  console.log()
  return (
    <div className='h-full p-4 flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between text-xl text-white font-semibold'>
                <h3 className='bg-red-600 p-2 rounded-md'>{data.category}</h3>
                <h4 className=''>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.taskTitle}</h2>
            <p>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as failed</button>
            </div>
        </div>
  )
}

export default AcceptTask
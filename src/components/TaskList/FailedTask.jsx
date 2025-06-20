import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full p-4 flex-shrink-0 w-[300px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between text-xl text-white font-semibold'>
                <h3 className='bg-red-600 p-2 rounded-md'>{data.category}</h3>
                <h4 className=''>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.taskTitle}</h2>
            <p>{data.taskDescription}</p>
            <button className='mt-4 bg-red-500 px-2 rounded'>Failed</button>
        </div>
  )
}

export default FailedTask
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setuserData] = useContext(AuthContext)
    
  return (
    <div className='bg-[1C1C1C] py-5 mt-4 '>
        <div className='bg-red-400 mb-2 p-4 w-full justify-between rounded flex text-xl'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>

        </div>

        <div className='h-[80%]'>
            {userData.map(function(elem,idx){
            return(
                <div key={idx} className='bg-black border-emerald-600 border-1 mb-2 p-4 w-full justify-between rounded flex text-xl'>
            <h2 className='text-lg font-medium w-1/5 '>{elem.name}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-800'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-200'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
            )
        })}
        </div>
        
    </div>
  )
}

export default AllTask
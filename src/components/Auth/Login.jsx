import React, { useState } from 'react'


const Login = ({handleLogin}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setemail('');
    setpassword('');
  }

  return (
    <div className='bg-blue-400 flex h-screen w-screen items-center justify-center'>
        <div className='bg-white border-black border-2 h-[600px] w-[500px] p-4 rounded-2xl'>
            <h1 className='text-center text-5xl mb-20'>Login</h1>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} className='gap-8 flex flex-col items-center justify-center'>
                <input className='border-2 py-4 w-full border-zinc-800 rounded-2xl px-2' type='email' placeholder='Enter your Email'
                value={email}
                onChange={(e)=>{
                  setemail(e.target.value)
                }}
                required/>
                <input className='border-2 py-4 w-full border-zinc-800 rounded-2xl px-2' type="password" placeholder='Enter password'
                value={password}
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}
                required />
                <button className='px-8 py-4 mt-10 border-2 border-black rounded-2xl bg-blue-500'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;
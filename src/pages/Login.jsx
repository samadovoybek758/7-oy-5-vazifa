import React, { useRef } from 'react'
import { http } from '../axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate() 

  function handle_btn(e) {
    e.preventDefault()

    const data = {
      identifier : emailRef.current.value,
      password : passwordRef.current.value
    }
    
    http.post('auth/local')
    .then(data =>{
      console.log(data);
    })
    .catch(err =>{
      console.log(err);
    })
  }

  function handle_btn2(v) {
    v.preventDefault()

    navigate('/')
  }
  return (
    <div>
        <form className='card w-96 shadow-lg flex flex-col gap-4 p-8 mx-auto mt-32 rounded-lg' >
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <input ref={emailRef} className='input input-bordered undefined' type="email" placeholder='Enter Email' />
        <input ref={passwordRef} className='input input-bordered undefined' type="password" placeholder='Password' />
        <button onClick={handle_btn} className='btn btn-primary'>REGISTER</button>
        <button onClick={handle_btn2} className='btn btn-secondary bg-indigo-900 border-none mt-3'>GUEST USER</button>
      </form>
    </div>
  )
}

export default Login
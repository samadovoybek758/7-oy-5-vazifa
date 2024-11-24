import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { http } from '../axios'

function Register() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()

  const navigate = useNavigate() 

  function handle_reg(ed) {
    ed.preventDefault()

    let data = {
      email : emailRef.current.value,
      password : passwordRef.current.value,
      username : nameRef.current.value
    }
    http.post('auth/local/register', data)
    .then(data => {

      console.log(data);
      navigate('/login')
    })
    .catch(err =>{
      let con = confirm("email yoki username allaqachon ishlatilgan");
      if (con) {
        emailRef.current.value = '';
        passwordRef.current.value = '';
        nameRef.current.value = '';
      }
    })

   
  }
  return (
    <div>
     <form className='card w-96 shadow-lg flex flex-col gap-4 p-8 mx-auto mt-32 rounded-lg' >
        <h1 className="text-center text-3xl font-bold">Register</h1>
        <input ref={nameRef} className='input input-bordered undefined' type="email" placeholder='Enter Name' />
        <input ref={emailRef} className='input input-bordered undefined' type="email" placeholder='Enter Email' />
        <input ref={passwordRef} className='input input-bordered undefined' type="password" placeholder='Password' />
        <button onClick={handle_reg} className='btn btn-primary'>REGISTER</button>
      </form>
  
    </div>
  )
}

export default Register
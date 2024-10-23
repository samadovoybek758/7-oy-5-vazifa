import React from 'react'

function Register() {
  return (
    <div>
      <form className='w-96 shadow-lg flex flex-col gap-4 p-8 mx-auto' >
        <input type="text" placeholder='Enter Username...' />
        <input type="email" placeholder='Enter Email' />
        <input type="password" placeholder='Password' />
        <button className='btn btn-primary'>REGISTER</button>
      </form>
    </div>
  )
}

export default Register
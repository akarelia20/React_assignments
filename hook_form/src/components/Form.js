import React, { useState } from 'react'

function Form (props) {
  const [firstname, setfirstName] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPassword, setConPassword] = useState('')

  return (
    <div className='m-5'>
      <form className='col align-items-center'>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> First Name:</label>
          <input
            type='text'
            value={firstname}
            onChange={e => setfirstName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> Last Name:</label>
          <input
            type='text'
            value={lastName}
            onChange={e => setLastname(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> Email:</label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> Password:</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> Confirm Password:</label>
          <input
            type='password'
            value={conPassword}
            onChange={e => setConPassword(e.target.value)}
          />
        </div>
      </form>
      <div className='card w-50 text-end'>
        <li> First Name : {firstname}</li>
        <li> Last Name : {lastName}</li>
        <li> Email : {email}</li>
        <li> password : {password}</li>
        <li> Confirm Password : {conPassword}</li>
      </div>
    </div>
  )
}

export default Form

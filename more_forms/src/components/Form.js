import React, { useState } from 'react'

function Form (props) {
  const [firstname, setfirstName] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPassword, setConPassword] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [LastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [conPasswordError, setConPasswordError] = useState('')

  const validateFirstName = e => {
    setfirstName(e.target.value)
    if (e.target.value === '') {
      setFirstNameError('')
    } else if (e.target.value.length < 2) {
      setFirstNameError('First name must be at least 2 characters!')
    } else {
      setFirstNameError('')
    }
  }

  const validateLastName = e => {
    setLastname(e.target.value)
    if (e.target.value === '') {
      setLastNameError('')
    } else if (e.target.value.length < 2) {
      setLastNameError('Last name must be at least 2 characters!')
    } else {
      setLastNameError('')
    }
  }

  const validateEmail = e => {
    setEmail(e.target.value)
    if (e.target.value === '') {
      setEmailError('')
    } else if (e.target.value.length < 5) {
      setEmailError('Email must be at least 5 characters!')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = e => {
    setPassword(e.target.value)
    if (e.target.value === '') {
      setPasswordError('')
    } else if (e.target.value.length < 8) {
      setPasswordError('Password must be at least 8 characters!')
    } else {
      setPasswordError('')
    }
  }

  const ConfirmPasswordMatch = e => {
    setConPassword(e.target.value)
    if (e.target.value === password) {
      setConPasswordError('')
    } else {
      setConPasswordError('Passwords must match!')
    }
  }

  return (
    <div className='m-5'>
      <form className='col align-items-center'>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> First Name:</label>
          <input type='text' value={firstname} onChange={validateFirstName} />
          <p> {firstNameError} </p>
        </div>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> Last Name:</label>
          <input type='text' value={lastName} onChange={validateLastName} />
          <p> {LastNameError} </p>
        </div>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> Email:</label>
          <input type='email' value={email} onChange={validateEmail} />
          {emailError ? <p> {emailError} </p> : ' '}
        </div>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> Password:</label>
          <input type='password' value={password} onChange={validatePassword} />
          <p> {passwordError} </p>
        </div>
        <div className='mb-3'>
          <label className='col-sm-2 col-form-label'> Confirm Password:</label>
          <input
            type='password'
            value={conPassword}
            onChange={ConfirmPasswordMatch}
          />
          <p> {conPasswordError} </p>
        </div>
      </form>
    </div>
  )
}

export default Form

import React from 'react'
import {useState, useEffect} from 'react'

function Login() {
    const [formData,setFormData] = useState({
        email:'',
        password:'',
    })

   const {email,password,password2,DNO,electricitymeterID,electricitymeterReading,gasmeterID,gasmeterReading,smartmeterID} = formData

    const onChange = (e) => {
        setFormData((prevstate) => ({...prevstate,[e.target.name]:e.target.value}
        ))
     
    }
    const onSubmit = (e) => {
        e.preventDefault()
        
            const newUser = {
                email,
                password,   
            }
            console.log(newUser)
    }
    
  return (
    <>
    <section className='form'>
        <h1 className='large text-primary'>Sign In</h1>
        <form className='form' onSubmit={onSubmit}>
            <div className='form-group'>
                <input type='text' placeholder='Email Address' name='email' required />
            </div>
            <div className='form-group'>
                <input type='password' placeholder='Password' name='password' minLength='6' />
            </div>
            <input type='submit' className='btn btn-primary' value='Login' />
        </form>
    </section>

    
    </>
  )
}

export default Login
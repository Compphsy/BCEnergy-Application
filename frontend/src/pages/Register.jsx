import React from 'react'
import {useState, useEffect} from 'react'

function Register() {
    const [formData,setFormData] = useState({
        email:'',
        password:'',
        password2:'',
        DNO:'',
        electricitymeterID:'',
        electricitymeterReading:'',
        gasmeterID:'',
        gasmeterReading:'',
        smartmeterID:'',
    })

   const {email,password,password2,DNO,electricitymeterID,electricitymeterReading,gasmeterID,gasmeterReading,smartmeterID} = formData

    const onChange = (e) => {
        setFormData((prevstate) => ({...prevstate,[e.target.name]:e.target.value}
        ))
     
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== password2){
            console.log('Passwords do not match')
        }else{
            const newUser = {
                email,
                password,
                password2,
                DNO,
                electricitymeterID,
                electricitymeterReading,
                gasmeterID,
                gasmeterReading,
                smartmeterID,
            }
            console.log(newUser)
        }
    }
    
  return (
    <>
    <section className='form'>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'><i className='fas fa-user'></i> Create Your Account</p>
        <form className='form' onSubmit={onSubmit}>
            <div className='form-group'>
                <input type='text' placeholder='Email Address' name='email' required />
            </div>
            <div className='form-group'>
                <input type='password' placeholder='Password' name='password' minLength='6' />
            </div>
            <div className='form-group'>
                <input type='password' placeholder='Confirm Password' name='password2' minLength='6' />
            </div>
            <div className='form-group'>
                <input type='text' placeholder='DNO' name='DNO' />
            </div>
            <div className='form-group'>
                <input type='text' placeholder='Electricity Meter ID' name='electricitymeterID' />
            </div>
            <div className='form-group'>
                <input type='text' placeholder='Electricity Meter Reading' name='electricitymeterReading' />
            </div>
            <div className='form-group'>
                <input type='text' placeholder='Gas Meter ID' name='gasmeterID' />
            </div>
            <div className='form-group'>
                <input type='text' placeholder='Gas Meter Reading' name='gasmeterReading' />
            </div>
            <div className='form-group'>
                <input type='text' placeholder='Smart Meter ID' name='smartmeterID' />
            </div>
            <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
            Already have an account? <a href='login.html'>Sign In</a>
        </p>
    </section>

    
    </>
  )
}

export default Register
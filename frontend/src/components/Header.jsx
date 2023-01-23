import React from 'react'
import{FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'



function header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>BCenergy</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                <FaSignInAlt/>Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                <FaUser/>Register
                </Link>
            </li>
            <li>
                <Link to='/dashboard'>
                <FaUser/>Dashboard
                </Link>
            </li>
            <li>
                <Link to='/payment'>
                <FaUser/>Payment
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default header
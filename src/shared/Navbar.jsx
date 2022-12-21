import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='w-screen bg-neutral-900 h-14 text-white flex items-center justify-evenly shrink-0'>
        <Link to="/">
            <i className="fa-solid fa-house"></i>

        </Link>
        <Link to="/history">
            <i className="fa-solid fa-clock-rotate-left"></i>
        </Link>
        <Link to="/profile">
            <i className="fa-solid fa-user"></i>
        </Link>
    </div>
  )
}

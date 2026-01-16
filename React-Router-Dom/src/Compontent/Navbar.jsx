import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 flex justify-between items-center px-10 py-4">
      
      {/* Left side */}
      <h2 className="text-white font-bold text-xl cursor-pointer">
        <Link to="/aboutme">MyApp</Link>
      </h2>

      {/* Right side */}
      <ul className="flex gap-10 font-semibold text-white">
        <li className="cursor-pointer hover:text-gray-200">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-200">
          <Link to="/login">Login</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-200">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-200">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar

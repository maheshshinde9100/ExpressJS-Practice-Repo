import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const {user,logout} = useContext(AuthContext);
  return (
    <nav className="bg-amber-800 px-6 py-3 shadow-md">
      <ul className="flex space-x-6 items-center">
        <li>
          <Link
            to="/"
            className="text-white hover:text-amber-300 font-semibold transition-colors"
          >
            Home
          </Link>
        </li>
        {user?(
          <li>
          <button className="text-white hover:text-amber-300 font-semibold transition-colors"
          onClick={logout}>
            Log Out
            </button> 
            </li>
        ):(
          <>
          <li>
          <Link
            to="/login"
            className="text-white hover:text-amber-300 font-semibold transition-colors"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="text-white hover:text-amber-300 font-semibold transition-colors"
          >
            Register
          </Link>
        </li>
        </>
        )}
        
      </ul>
    </nav>
  );
}

export default Navbar;
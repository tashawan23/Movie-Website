import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';


export const Navbar = () => {

    return (
        <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
              MyMovies
              <i className="fas fa-film"></i>
            </Link>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <Link to='/' className='nav-links' >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/topmovies'
                  className='nav-links'
                  >
                 Top Movies
                </Link>
              </li>
              <li className='nav-item-search'>
              <Link
                  to='/searchmovies'
                  className='nav-links'
                  >
              <i className="fas fa-search"></i>
              </Link>
              </li>


            </ul>
          </div>
        </nav>
      </>
    )
}

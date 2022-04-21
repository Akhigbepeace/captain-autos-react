import React from 'react'

const Navbar = () => {
  return (
      <div id='navbar'>
        <div className='navbar-logo'>
          <a href='!#'><p><span>C<i className="fa-solid fa-car"></i>ptain</span> Autos</p></a>
        </div>
        <div className='navbar-links'>
          <ul>
            <li><a href='!#' className='current'>Home</a></li>
            <li><a href='!#'>Pages</a></li>
            <li><a href='!#'>Blog</a></li>
            <li><a href='!#'>Cars</a></li>
            <li><a href='!#'>Contact Us</a></li>
            <li><a href='!#'><i className="fas fa-search"></i></a></li>
          </ul>
        </div>
      </div>
  )
}


export default Navbar
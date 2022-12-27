import React from 'react'
import "./navBar.css"

function NavBar() {
  return (
    <nav>
        <ul className='navItemsContainer'>
            <li className='navItem'>Institucional</li>
            <li className='navItem'>Propuesta académica</li>
            <li className='navItem'>UGR Latam</li>
            <li className='navItem'>UGR Virtual</li>
        </ul>
    </nav>
  ) 
}

export default NavBar
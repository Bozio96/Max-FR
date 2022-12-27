import React from 'react'
import "./header.css"
import Brand from './Brand/Brand'
import Search from './Search/Search'
import NavBar from './NavBar/NavBar'
import BtnContainer from './Buttons/BtnContainer'

function Header() {
  return (
    <header className='header'>
        <Brand/>
        <Search/>
        <NavBar/>
        <BtnContainer/>       
    </header>
  )
}

export default Header
import React from 'react'
import BtnAlumnos from './BtnAlumnos'
import BtnComunidad from './BtnComunidad'
import BtnContacto from './BtnContacto'
import "./btn.css"

function BtnContainer() {
  return (
    <div className='btnContainer'>
        <BtnAlumnos/>
        <BtnComunidad/>
        <BtnContacto/>
    </div>
  )
}

export default BtnContainer
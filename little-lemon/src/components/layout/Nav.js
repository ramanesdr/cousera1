import React from 'react'
import { ReactComponent as Blabla } from '../../image/blabla.svg'

function Nav() {
  return (
    <div className='nav'>
        <Blabla />
        <ul className='nav--link'>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Menu</a></li>
            <li><a href=''>Reservetion</a></li>
            <li><a href=''>Order Online</a></li>
            <li><a href=''>Log in</a></li>
        </ul>
    </div>
  )
}

export default Nav

import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <>
        <nav className='flex mx-auto w-10/12 justify-between items-center'>
            <div>
                <img src={logo} alt="logo" />
            </div>

            <div>
                <ul className='flex gap-10 uppercase font-semibold text-sm'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header
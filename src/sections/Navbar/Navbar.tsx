'use client'
import { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { social_links } from './data'
import './navbar.css'
import Navigation from './Navigation'
import useMenuContext from '@/context/menu-context'

const Navbar = () => {
  const { isMenuOpen, showMenu, hideMenu } = useMenuContext()
  const currentYear = new Date().getFullYear()
  

  return (
    <div className='navbar'>
        <div className='sidebar'>

            <div 
                className='menu-icon'
                onClick={() => {
                    isMenuOpen ? hideMenu() : showMenu()
                }}
            >
                <div 
                    className={`line line-1 ${isMenuOpen ? 'hamburger-line-1' : ''}  `}>
                </div>
                <div 
                    className={`line line-2 ${isMenuOpen ? 'hamburger-line-2' : ''}  `}>
                </div>
                <div 
                    className={`line line-3 ${isMenuOpen ? 'hamburger-line-3' : ''}  `}>
                </div>        
            </div>

            <ul className='social-icons-list'>
                {
                    social_links.map(social => (
                        <li key={social.link}>
                            <a 
                                href={social.link}
                                className='social-link'
                            >
                                {<social.icon />}
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div className='year'>
                <p>{currentYear}</p>
            </div>
        </div>

        <Navigation 
            className={isMenuOpen ? 'navigation-open' : ''}
        />   

    </div>
  )
}

export default Navbar
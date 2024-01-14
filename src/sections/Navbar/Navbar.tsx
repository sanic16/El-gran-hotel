'use client'
import { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { social_links } from './data'
import './navbar.css'
import Navigation from './Navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const currentYear = new Date().getFullYear()
  

  return (
    <div className='navbar'>
        <div className='sidebar'>

            <div 
                className='menu-icon'
                onClick={() => setIsOpen(!isOpen)}
            >
                <div 
                    className={`line line-1 ${isOpen ? 'hamburger-line-1' : ''}  `}>
                </div>
                <div 
                    className={`line line-2 ${isOpen ? 'hamburger-line-2' : ''}  `}>
                </div>
                <div 
                    className={`line line-3 ${isOpen ? 'hamburger-line-3' : ''}  `}>
                </div>        
            </div>

            <ul className='social-icons-list'>
                {
                    social_links.map(social => (
                        <li>
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
            className={isOpen ? 'navigation-open' : ''}
        />   

    </div>
  )
}

export default Navbar
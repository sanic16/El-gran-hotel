import React from 'react'
import { footer_images, footer_info } from './data'
import { nav_links } from '../Navbar/data'
import { FaHeart } from 'react-icons/fa'
import './footer.css'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="main-part">

            <div className='footer-list-wrapper' id='contact'>
                <h3 className='footer-heading'> 
                    El Gran Hotel
                </h3>
                <ul className='footer-list'>
                    { footer_info.map(item => (
                        <li className='footer-list-item' key={item}>
                            <a href='#' className='footer-list-link'>
                                {item}
                            </a>
                        </li>
                    
                    )) }
                </ul>
            </div>

            <div className='footer-list-wrapper'>
                <h3 className='footer-heading'>
                    Explorar
                </h3>
                <ul className='footer-list'>
                    { nav_links.map(item => (
                        <li className='footer-list-item' key={item.link}>
                            <a href={item.link} className="footer-list-link">
                                {item.text}
                            </a>            
                        </li>
                    ))}
                </ul>
            </div>    

            <div className='contact'>
                <h3 className='footer-heading'>
                    Contacto
                </h3>
                <p>
                    Registrate para recibir ofertas exclusivas y noticias
                </p>
                <form className="footer-form">
                    <input 
                        type="text" 
                        className='footer-input' 
                        placeholder='Your email'
                    />
                    <button className='footer-btn'>
                        Registrate
                    </button>
                </form>
            </div>    

            <div className='gallery'>
                <h3 className="footer-heading">Galería</h3>
                <div className='gallery-images'>
                        
                            { footer_images.map(item => (
                                <div className='image-wrapper' key={item}>    
                                    <img
                                        src={item}
                                        alt="gallery"
                                        className='footer-image' 
                                    />
                                </div>
                            ))}
                        
                </div>
            </div>     

        </div>

        <div className='creator-part'>
            <div className='copyright-text'>
                <p>
                    Derechos Reservados &copy; { new Date().getFullYear() }. El Gran Hotel 
                </p>
            </div> 
            <div className='text-right'>
                <p>
                    Made with <FaHeart /> by <span>Julio Sanic</span>
                </p>
            </div>
                                   
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './about.css'
import { FaAngleDoubleRight } from 'react-icons/fa'
import image1 from '@/../public/assets/images/gallery/guate_1.jpg'
import image2 from '@/../public/assets/images/gallery/guate_2.jpg'
import image3 from '@/../public/assets/images/gallery/guate_3.jpg'
import image5 from '@/../public/assets/images/gallery/guate_5.jpg'

const About = () => {
  return (
    <section className='about-us' id='about'>
        <div className='about-us-content'>
            <h1 className='about-us-heading'>Acerca de Nosotros</h1>
            <div className='underline'>
                <div className='small-underline'>

                </div>
                <div className="big-underline">

                </div>
            </div>
            <h3 className="sub-heading">Gran Hotel</h3>
            <p className='about-us-paragraph'>
                Somos un hotel radicado en los alrededores del lago de Atitlán, 
                contamos con una gran variedad de servicios para que su estadía sea lo más placentera posible.
            </p>
            <button className='about-us-btn'>
                Leer Más
                <FaAngleDoubleRight />
            </button>
        </div>
        <div className='about-us-images'>
            <img src={image1.src} className="image image-1" />
            <img src={image2.src} className="image image-2" />
            <img src={image3.src} className="image image-3" />
            <img src={image5.src} className="image image-4" />
        </div>
    </section>
  )
}

export default About
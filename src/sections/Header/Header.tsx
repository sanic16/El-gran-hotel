import crown from '@/../public/assets/images/corona.png'
import './header.css'
import { FaCrown } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header'>
        <div className='brand'>
            <div>
                <FaCrown />
            </div>
            <h3 className='hotel-heading'>
                El Gran Hotel
            </h3>
        </div>

        <div className='banner'>
            <h1 className='banner-heading'>
                Bienvenido al Gran Hotel
            </h1>
            <p className='banner-paragraph'>
                El hotel que te ofrece la mejor experiencia
            </p>
            <button className='banner-button'>
                Reservar
            </button>
        </div>
    </header>
  )
}

export default Header
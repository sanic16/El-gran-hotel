'use client'
import { FaSearch } from "react-icons/fa"
import './navigation.css'
import { nav_links } from "./data"

const Navigation = (
    {
        className
    }:{
        className?: string
    
    }
) => {

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
    }

  return (
    <div className={`navigation ${className}`}>

        <div className="navigation-header">
            <h1 className="navigation-heading">Grand Hotel</h1>

            <form 
                className="navigation-search"
                onSubmit={onHandleSubmit}
            >
                <input 
                    type="text" 
                    className="navigation-search-input" 
                    placeholder="search..."
                />
                <button
                    className="navigation-search-btn "
                >
                    <FaSearch />
                </button>
            </form>
        </div>

            <ul className="navigation-list">
                {
                    nav_links.map(nav_item => (
                        <li className="navigation-item">
                            <a href={nav_item.link} className="navigation-link">{nav_item.text}</a>
                        </li>
                    ))
                }
            </ul>

            <div className="copyright">
                <p>
                    &copy; {new Date().getFullYear()} Gran Hotel. Todos los derechos reservados.
                </p>
            </div>
        


    </div>
  )
}

export default Navigation
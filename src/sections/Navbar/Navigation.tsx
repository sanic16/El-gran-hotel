'use client'
import { FaSearch } from "react-icons/fa"
import './navigation.css'
import { nav_links } from "./data"
import useMenuContext from "@/context/menu-context"

const Navigation = (
    {
        className
    }:{
        className?: string
    
    }
) => {
    const { hideMenu } = useMenuContext()
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
                        <li className="navigation-item" key={nav_item.link}>
                            <a 
                                href={nav_item.link} 
                                className="navigation-link"
                                onClick={hideMenu}
                            >
                                    {nav_item.text}
                            </a>
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
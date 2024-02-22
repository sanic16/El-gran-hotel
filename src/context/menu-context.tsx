'use client'
import React, { useState, createContext, useContext } from 'react'

const MenuContext = createContext({
    isMenuOpen: false,
    showMenu: () => {},
    hideMenu: () => {}
})

export const MenuContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const showMenu = () => setIsMenuOpen(true)
    const hideMenu = () => setIsMenuOpen(false)
    return (
        <MenuContext.Provider
             value={{
                isMenuOpen,
                showMenu,
                hideMenu
             }}
        >
            {children}
        </MenuContext.Provider>
    )  
}

const useMenuContext = () => useContext(MenuContext)
export default useMenuContext
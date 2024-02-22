import About from '@/sections/About/About'
import Customers from '@/sections/Customers/Customers'
import Footer from '@/sections/Footer/Footer'
import Header from '@/sections/Header/Header'
import Navbar from '@/sections/Navbar/Navbar'
import Rooms from '@/sections/Rooms/Rooms'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Rooms />
      <Customers />
      <Footer />
    </>
  )
}

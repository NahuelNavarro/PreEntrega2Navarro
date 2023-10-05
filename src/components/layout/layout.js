import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../NavBar/footer'

export default function Layout({children}) {
  return (
   <>
    <NavBar/>
    {children}
    <Footer/>
   </>
    
  )
}

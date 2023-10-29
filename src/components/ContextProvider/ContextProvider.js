import React, { useEffect } from 'react'
import { ColeccionContext } from '../../context/ColeccionContext'
import { useState } from 'react'

export default function ContextProvider({children}) {
    const [coleccion,setColeccion]=useState([])
    const productosLocalStorage = JSON.parse(localStorage.getItem('Carrito') )|| []



  return (
    <ColeccionContext.Provider value={{coleccion, setColeccion,productosLocalStorage}}>
        {children}
    </ColeccionContext.Provider>

  )
}

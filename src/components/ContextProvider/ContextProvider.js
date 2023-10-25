import React, { useEffect } from 'react'
import { ColeccionContext } from '../../context/ColeccionContext'
import { useState } from 'react'

export default function ContextProvider({children}) {
    const [coleccion,setColeccion]=useState([])



  

  return (
    <ColeccionContext.Provider value={{coleccion, setColeccion}}>
        {children}
    </ColeccionContext.Provider>

  )
}

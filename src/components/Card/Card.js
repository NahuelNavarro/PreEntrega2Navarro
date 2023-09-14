import React from 'react'
import "./style.css"
import image1 from "../Card/asset-card/Borcego.jpg"

export default function Card() {
  return (
                <div className='card'>
                  <img src={image1} alt=''className='card-image'/>
                  <div className='card-body'>
                    <h4>Producto</h4>
                    <p className='card-text text'>Un párdrafo, tasdasdasdasdasdambiésdn llamado pdfgdfgarágrafo, es una unidad comunicativa del lenguaje escrito compuesta por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo termina en un punto y aparte</p>
                  </div>
                </div>
  )
}



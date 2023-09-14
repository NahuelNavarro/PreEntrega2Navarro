import React from 'react'
import Card from './Card'

export default function Cards() {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row'>
        <div className='col-md-4'>
          <Card/>
        </div>
        <div className='col-md-4'>
          <Card/>
        </div>
        <div className='col-md-4'>
          <Card/>
        </div>
      </div>
    </div>
  )
}


import React from 'react'
import '../css-files/Alertbox.css'

export const Alertbox = ({ title, description, toggleAlert }) => {

  return (
    <div className='alert-box-background'>
      <div className='alert-box'>
        <div className='header-button'>
          <button onClick={() => toggleAlert(false)}>x</button>
        </div>
        <div className='alert-box-header'>

          <h1>{title}</h1>
        </div>
        <div className='alert-box-body'>
          {description}
        </div>
      </div>
    </div>
  )
}

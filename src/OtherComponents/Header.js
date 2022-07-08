import React from 'react'

export const Header = ({title}) => {
  return (

    <div className='header' style={{paddingTop: '3px', height: '85px'}}>
    <h1 style={{marginBottom: '44px'}}> {title}</h1>
    </div>  )
}

export default Header
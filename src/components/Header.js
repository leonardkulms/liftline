import React from 'react'
import Checkbox from './Checkbox'

function Header(props) {
  const {theme, handleTheme} = props
  return(
    <nav className= {'page--navigation ' + ((theme)? 'dark' : 'light')} >
      <div className='page--navigation-logo'>
        <h1>
          Liftline
        </h1>
      </div>
      <Checkbox theme={theme} handleTheme={handleTheme} />
    </nav>
  )
}

export default Header
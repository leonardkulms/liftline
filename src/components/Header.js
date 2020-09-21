import React from 'react'
import Checkbox from './Checkbox'

function Header(props) {
  const {theme, handleTheme} = props
  return(
    <div className={'page--navigation ' + ((theme)? 'dark' : 'light')} >
      <nav className='page--navigation-nav'>
        <div className='page--navigation-logo'>
          <h1>
            Liftline
          </h1>
        </div>
        <Checkbox theme={theme} handleTheme={handleTheme} />
      </nav>
    </div>
  )
}

export default Header
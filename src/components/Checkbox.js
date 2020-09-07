import React from 'react'

function Checkbox(props) {
  return(
    <label class="switch">
    
    <input className='checkbox'
      type="checkbox"
      checked={props.theme}
      onClick={() => props.handleTheme()}
    />
    
    <span className='slider round'>
      <span role='img' aria-label='theme' className='moon'>🌙</span>
      <span role='img' aria-label='theme' className='sun'>🌤️</span>
    </span>

    </label>    
  )
}
export default Checkbox

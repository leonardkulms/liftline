import React, { useState } from 'react'
import Avatar from './Avatar'

function Lift(props) {
  const [fireCount, setFireCount] = useState(props.fireCount)
  const [likedByUser, setLikedByUser] = useState(props.fireCount)

  const handleClick = () => {
    (likedByUser) ? setFireCount(fireCount - 1) : setFireCount(fireCount + 1)
    setLikedByUser(!likedByUser)
  }


  return(
    <li className= {'app--lift ' + ((props.theme)? 'dark' : 'light')}>
      <Avatar />
      <p>{ props.exercise }</p>
      
      <div className='app--lift-stats'>
        <p className='app--lift-item'>{ props.sets } X </p>
        <p className='app--lift-item'>{ props.reps } </p>
        <p className='app--lift-item'>mit { props.weight }</p>
      </div>

      <div className='app--lift-reaction'>
        <p><span aria-label='fire' role='img'>🔥</span>{ fireCount }</p>

        <button onClick={ () => handleClick() } className= {'app--lift-reaction-button ' + ((likedByUser)? 'is-active':'')}>
          <span className='app--lift-reaction-icon' aria-label='fire' role='img'>🔥</span>
        </button>

      </div>

    </li>
  )
}

export default Lift
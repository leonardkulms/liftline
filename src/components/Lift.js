import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'

function Lift(props) {
  const [fireCount, setFireCount] = useState(props.fireCount)
  const [likedByUser, setLikedByUser] = useState(props.likedByUser)

  useEffect( () => {
    setFireCount(props.fireCount)
    setLikedByUser(props.likedByUser)
  }, [props.fireCount, props.likedByUser])

  const handleClick = () => {
    (likedByUser) ? setFireCount(fireCount - 1) : setFireCount(fireCount + 1)
    setLikedByUser(!likedByUser)
  }


  return(
    <li className= {'app--lift ' + ((props.theme)? 'dark' : 'light')}>
      <Avatar />
      <div className='app--lift-stats'>
        <p className='app--lift-item' >{ props.exercise}, </p>
        <p className='app--lift-item'>{ props.sets } X </p>
        <p className='app--lift-item'>{ props.reps } </p>
        <p className='app--lift-item'>with { props.weight }</p>
      </div>
      <p><span aria-label='fire' role='img'>🔥</span>{ fireCount }</p>
      <div className='app--lift-reaction'>
        <button onClick={ () => handleClick() } 
        className= {'app--lift-reaction-button ' + 
        ((props.theme)? 'dark ' : 'light ') + 
        ((likedByUser)? 'is-active':'')}>
          <span className='app--lift-reaction-icon' aria-label='fire' role='img'>🔥</span>
        </button>

      </div>

    </li>
  )
}

export default Lift
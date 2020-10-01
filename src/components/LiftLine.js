import React, { useState, useEffect } from 'react'
import Lift from './Lift'
import NewLift from './NewLift'

function LiftLine(props) {
  const [lifts, setLifts] = useState([])

  const addLift = (newLift)  => {
    setLifts([ newLift, ...lifts ])
  }

  // use only on the first render
  useEffect( () => {
    let exercises = ['Bench Press', 'Deadlifts','Squats']
    let random_item = (items) => items[Math.floor(Math.random()*items.length)]
  
    let fakeData = new Array(20).fill([{
      exercise: random_item(exercises),
      sets: 1 + Math.floor(Math.random()* 5),
      reps: 1 + Math.floor(Math.random()* 10),
      weight: Math.floor(Math.random()*120),
      likedByUser: Math.floor(Math.random()*2),
      fireCount: Math.floor(Math.random()*30)
    }]).flat();

    setLifts(lifts => fakeData)
  }, [])

  return(
    <ul className="app--liftline">
      <NewLift theme = { props.theme } addLift = { addLift }/>
  
      { lifts.map( lift => <Lift 
          theme= { props.theme }
          sets={ lift.sets }
          reps={ lift.reps }
          weight={ lift.weight }
          exercise={ lift.exercise }
          fireCount={lift.fireCount }
          likedByUser={ lift.likedByUser }/>) }

    </ul>
  )
}

export default LiftLine
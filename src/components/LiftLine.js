import React from 'react'
import Lift from './Lift'

function LiftLine(props) {
  const exercises = ['Bench', 'Deadlift','Squat']

  const random_item = (items) => items[Math.floor(Math.random()*items.length)]

  let fakeData = new Array(100).fill([{
    exercise: random_item(exercises),
    sets: 1 + Math.floor(Math.random()* 5),
    reps: 1 + Math.floor(Math.random()* 10),
    weight: Math.floor(Math.random()*120),
    likedByUser: Math.floor(Math.random()*2),
    fireCount: Math.floor(Math.random()*30)
  }]).flat();

  const liftComponents = fakeData.map(
    lift => <Lift 
      theme= { props.theme }
      sets={ lift.sets }
      reps={ lift.reps }
      weight={ lift.weight }
      exercise={ lift.exercise}
      fireCount={lift.fireCount}
      likedByUser={ lift.likedByUser}/>)
  
  return(
    <ul className="app--liftline">
      { liftComponents }
    </ul>

  )
}

export default LiftLine
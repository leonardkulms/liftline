import React from 'react'

function NewLift(props) {

  const handleSubmit = () => {
    props.addLift({sets: 5, reps: 5, weight: 100, exercise: 'bench'})
  }

  let setOptions = [];
  for (let i = 1; i <= 10; i++) {
    setOptions.push(<option key={i} value="{i}">{i}</option>)
  }

  let repOptions = [];
  for (let i = 1; i <= 15; i++) {
    repOptions.push(<option key={i} value="{i}">{i}</option>)
  }

  return(
    <form className={ 'app--newlift ' + ((props.theme)? 'dark' : 'light') }>
      <label>
        Exercise:
        <input type="text" name="exercise" />
      </label>

      <label>
        Sets:
        <select>
          { setOptions }
        </select>
      </label>

      <label>
        Reps:
        <select>
          { repOptions }
        </select>
      </label>

      <button type='button' onClick= {() => handleSubmit()}>Submit</button>
    </form>
  )
}

export default NewLift
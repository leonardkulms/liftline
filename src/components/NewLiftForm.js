import React from 'react'
import { useForm } from 'react-hook-form'

function NewLiftForm(props) {

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    props.addLift({
      sets: data.sets,
      reps: data.reps,
      weight: data.weight,
      exercise: data.exercise,
      fireCount: 0,
      likedByUser: false})
    props.toggleModal()
  }
  
  return(
    <form 
      className={'app--newlift ' + ((props.theme)? 'dark' : 'light')}
      onSubmit={handleSubmit(onSubmit)}>
      <div className="app--newlift-form-group">
        <label className="app--newlift-form-label"  htmlFor="exercise">Exercise:</label>
        <select className="app--newlift-form-select" name="exercise" ref={register({ required: true })}>
          <option>Deadlifts</option>
          <option>Bench Press</option>
          <option>Squats</option>
        </select>
      </div>
      <div className="app--newlift-form-group">
        <label className="app--newlift-form-label"  htmlFor="weight">Weight:</label>
        <input className="app--newlift-form-input" name="weight" type="number" min="20" max="300" ref={register({ required: true })} />
      </div>
      <div className="app--newlift-form-group">
        <label className="app--newlift-form-label"  htmlFor="reps">Reps:</label>
        <input className="app--newlift-form-input" type="number" min="1" max="20" name="reps" ref={register({ required: true })} />
      </div>
      <div className="app--newlift-form-group">
      <label className="app--newlift-form-label"  htmlFor="sets">Reps:</label>
      <input className="app--newlift-form-input" type="number" min="1" max="20" name="sets" ref={register({ required: true })} />
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      </div>
      <button class="app--newlift-button" type="submit">Add Lift !</button>
    </form>

  )
}

export default NewLiftForm

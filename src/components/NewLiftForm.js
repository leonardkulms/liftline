import React from 'react'
import { useForm } from 'react-hook-form'

function NewLiftForm(props) {

  const { register, handleSubmit, errors } = useForm()
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
        {errors.exercise && <span className="app--newlift-form-error">Exercise is required</span>}
      </div>

      <div className="app--newlift-form-group">
        <label className="app--newlift-form-label"  htmlFor="weight">Weight:</label>
        <input className="app--newlift-form-input" name="weight" type="number" min="20" max="300" ref={register({ required: true })} />
        {errors.weight && <span className="app--newlift-form-error">Please specify the weight of this lift.</span>}
      </div>

      <div className="app--newlift-form-group">
        <label className="app--newlift-form-label"  htmlFor="reps">Reps:</label>
        <input className="app--newlift-form-input" type="number" min="1" max="20" name="reps" ref={register({ required: true })} />
        {errors.reps && <span className="app--newlift-form-error">Please specify the number of reps of this lift</span>}
      </div>

      <div className="app--newlift-form-group">
        <label className="app--newlift-form-label"  htmlFor="sets">Sets:</label>
        <input className="app--newlift-form-input" type="number" min="1" max="20" name="sets" ref={register({ required: true })} />
        {errors.sets && <span className="app--newlift-form-error">Please specify the number of sets of this lift</span>}
      </div>

      <button className="app--newlift-button" type="submit">Add Lift !</button>
    </form>

  )
}

export default NewLiftForm

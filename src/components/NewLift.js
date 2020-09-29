import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Modal from './Modal'

function NewLift(props) {
  const [isModalActive, setModalIsActive] = useState(false)
  const toggleModal = () => {
		setModalIsActive(!isModalActive)
	}

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    props.addLift({
      sets: data.sets,
      reps: data.reps,
      weight: data.weight,
      exercise: data.exercise,
      fireCount: 0,
      likedByUser: false})
    toggleModal()
  }

  return (
    <div className="app--newlift-container">
      {isModalActive
        ?<Modal heading="Add a new Lift!" onRequestClose={toggleModal} >
          <form 
            className={'app--newlift ' + ((props.theme)? 'dark' : 'light')}
            onSubmit={handleSubmit(onSubmit)}>
            <div className="app--newlift-form-group">
              <label htmlFor="exercise">Exercise:</label>
              <select name="exercise" ref={register({ required: true })}>
                <option>Deadlift</option>
                <option>Bench</option>
                <option>Squat</option>
              </select>
            </div>
            <div className="app--newlift-form-group">
              <label htmlFor="weight">Weight:</label>
              <input name="weight" type="number" min="20" max="300" ref={register({ required: true })} />
            </div>
            <div className="app--newlift-form-group">
              <label htmlFor="reps">Reps:</label>
              <input  type="number" min="1" max="20" name="reps" ref={register({ required: true })} />
            </div>
            <div className="app--newlift-form-group">
            <label htmlFor="sets">Reps:</label>
            <input  type="number" min="1" max="20" name="sets" ref={register({ required: true })} />
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            </div>
            <button class="app--newlift-button" type="submit">Add Lift</button>
          </form>
        </Modal>
      :<button onClick={toggleModal} type="button" className="app--newlift-button">➕
      </button>}
    </div>
  );
}

export default NewLift
import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import NewLiftForm from './NewLiftForm'

function NewLift(props) {
  const [isModalActive, setModalIsActive] = useState(false)
  const toggleModal = () => {
		setModalIsActive(!isModalActive)
	}

  return (
    <div className={ 'app--newlift-container ' + ((props.theme)? 'dark ' : 'light ')} >
      {isModalActive
        ?<Modal heading="Add a new Lift!" onRequestClose={ toggleModal } theme={ props.theme } >
          <NewLiftForm toggleModal={ toggleModal } addLift={ props.addLift } />
        </Modal>
      :<button 
        onClick={toggleModal} 
        type="button" 
        className="app--newlift-button"
        >➕
      </button>}
    </div>
  );
}

export default NewLift
import React from 'react'
const { useState, useEffect } = React;

function Modal (props) {
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				props.onRequestClose();
			}
		}
		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);
		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className="modal--backdrop">
			<div className="modal--container">
        <div className="modal--header">
          <h3 className="modal--title">{props.heading}</h3>
			  	<button type="button" className="app--newlift-button-close" onClick={props.onRequestClose}>X</button>
        </div>
        {props.children}
			</div>
		</div>
	)
}

export default Modal;
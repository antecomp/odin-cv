import React, { Component, useCallback, useEffect, useRef, useState } from "react";

const EntireForm = (props) => {
	// App.jsx will need to hold the cvData state to pass between the sibling components
	const cvData = props.cvData;
	const setcvData = props.setcvData;

	const inputUpdate = (text, target) => {
		setcvData({ ...cvData, [target]: text }); // don't forget to add the square brackets to use the VALUE of target, not the word target as the key
	}

	return(
		<div className="formcontainer">
			<h4>Basic Info</h4>
			<h5>Name:</h5>
			<input value={cvData.name} onChange={e => {inputUpdate(e.target.value, "name")}}></input>
			<h5>Profession:</h5>
			<input value={cvData.prof} onChange={e => {inputUpdate(e.target.value, "prof")}}></input>
			<h5>Email:</h5>
			<input value={cvData.email} onChange={e => {inputUpdate(e.target.value, "email")}}></input>
			<h5>Phone:</h5>
			<input value={cvData.phone} onChange={e => {inputUpdate(e.target.value, "phone")}}></input>
			<h5>Address:</h5>
			<input value={cvData.address} onChange={e => {inputUpdate(e.target.value, "address")}}></input>
			<hr />
			<h4>About Me</h4>
			<textarea 
			name="aboutme" id="aboutme" cols="30" rows="10" 
			value={cvData.description} onChange={e =>{inputUpdate(e.target.value, "description")}}></textarea>
		</div>
	)
}
// I named this before thinking of how I was going to implement the forms for Education and Experience,
// now I feel like an idiot
export default EntireForm;
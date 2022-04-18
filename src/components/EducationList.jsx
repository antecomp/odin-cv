import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import EducationTemplate from "../templates/EducationTemplate";
import uniqid from "uniqid"; // React always requires you to add a unique key to each element when you map over a list. In real world projects you often use database ids as unique keys, however in this project we are not using a database, so let’s install a package that provides us with unique ids.


 const EducationList = (props) => {
	// will need education array and a setter method (maybe an anonymous function passed from App to just change the education array)
	// take each item in the education array and generate a form for it (should inherit the current values)
	// form must also have a delete button to remove it entirely from the array
	// onchange should change the values of the object at the correct array index - how???
	// Have an add button that adds a new empty education object to the array (hopefully will trigger re-render)
	
	const {educationArray, setEducationArray} = props;

	const addEducation = () => {
		// concat might be better readable than the spread op
		setEducationArray([...educationArray, EducationTemplate]); // if this doesnt work - just do the template here
		console.log(educationArray);
	}

	const deleteEducation = (index, e) => {
		e.preventDefault();
		setEducationArray(
			educationArray.filter((item, i) => i !== index)
		)
	}

	const updateEducationItem = (index, key, value) => {
		setEducationArray(
			/* [...educationArray.slice(0, index), 
			{...educationArray[index], [key]: value},
			...educationArray.slice(index + 1)] */
			// thanks ad
			educationArray.map((el, i) => i === index ? {...el, [key]: value} : el)
		)
	}

	return(
		<div className="education-container">
			{
				educationArray.map((education, index) => {
					return(
					<form className="educationForm formX">
						<h4>School #{index + 1}</h4><button onClick={e => {deleteEducation(index, e)}}>Delete</button>
						<h5>Years?</h5>
						<input value={education.yearRange} onChange={e => {updateEducationItem(index, "yearRange", e.target.value)}}></input>
						<h5>Location?</h5>
						<input value={education.location} onChange={e => {updateEducationItem(index, "location", e.target.value)}}></input>
						<h5>Type?</h5>
						<input value={education.type} onChange={e => {updateEducationItem(index, "type", e.target.value)}}></input>
						<h5>Major?</h5>
						<input value={education.major} onChange={e => {updateEducationItem(index, "major", e.target.value)}}></input>
					</form>
					)
				})
			}
			<button onClick={addEducation}>Add Another</button>
		</div>
	)
 }

 export default EducationList;
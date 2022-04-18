import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import ExperienceTemplate from "../templates/ExperienceTemplate";
import uniqid from "uniqid"; // React always requires you to add a unique key to each element when you map over a list. In real world projects you often use database ids as unique keys, however in this project we are not using a database, so let’s install a package that provides us with unique ids.


 const ExperienceList = (props) => {
	// this is legit a reformat of Education with the other needed info
	
	const {experienceArray, setExperienceArray} = props;

	const addExperience = () => {
		// concat might be better readable than the spread op
		setExperienceArray([...experienceArray, ExperienceTemplate]); // if this doesnt work - just do the template here
		console.log(experienceArray);
	}

	const deleteExperience = (index) => {
		setExperienceArray(
			experienceArray.filter((item, i) => i !== index)
		)
	}

	const updateExperienceItem = (index, key, value) => {
		setExperienceArray(
			/* [...experienceArray.slice(0, index), 
			{...experienceArray[index], [key]: value},
			...experienceArray.slice(index + 1)] */
			// thanks ad
			experienceArray.map((el, i) => i === index ? {...el, [key]: value} : el)
		)
	}

	return(
		<div className="form-experience">
			{
				experienceArray.map((experience, index) => {
					return(
					<form>
						<button onClick={() => {deleteExperience(index)}}>Delete</button>
						<h5>Years?</h5>
						<input value={experience.yearRange} onChange={e => {updateExperienceItem(index, "yearRange", e.target.value)}}></input>
						<h5>Company?</h5>
						<input value={experience.company} onChange={e => {updateExperienceItem(index, "company", e.target.value)}}></input>
						<h5>Profession / Job Title?</h5>
						<input value={experience.prof} onChange={e => {updateExperienceItem(index, "prof", e.target.value)}}></input>
						<h5>Describe your job...</h5>
						<textarea cols="30" rows="10" value={experience.description} onChange={e => {updateExperienceItem(index, "description", e.target.value)}}></textarea>
					</form>
					)
				})
			}
			<button onClick={addExperience}>Add Another</button>
		</div>
	)
 }

 export default ExperienceList;
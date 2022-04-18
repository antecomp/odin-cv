import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";

import CVBlank from "../templates/CVBlank";
import ExampleCompleted from "../templates/ExampleCompleted";

const EntireForm = (props) => {
	// App.jsx will need to hold the cvData state to pass between the sibling components
	const cvData = props.cvData;
	const setcvData = props.setcvData;

	const inputUpdate = (value, target) => {
		setcvData({ ...cvData, [target]: value }); // don't forget to add the square brackets to use the VALUE of target, not the word target as the key
	}

	const simpleInputUpdate = (element) => {
		inputUpdate(element.target.value, element.target.name);
	}

	const loadCV = (loadObj) => {
		setcvData(loadObj);
	}

	return(
		<div className="formcontainer">
			<h4>Basic Info</h4>
			<h5>Name:</h5>
			<input value={cvData.name} name="name" onChange={simpleInputUpdate}></input>
			<h5>Profession:</h5>
			<input value={cvData.prof} name="prof" onChange={simpleInputUpdate}></input>
			<h5>Email:</h5>
			<input value={cvData.email} name="email" onChange={simpleInputUpdate}></input>
			<h5>Phone:</h5>
			<input value={cvData.phone} name="phone" onChange={simpleInputUpdate}></input>
			<h5>Address:</h5>
			<input value={cvData.address} name="address" onChange={simpleInputUpdate}></input>
			<hr />
			<h4>About Me</h4>
			<textarea 
			id="aboutme" cols="30" rows="10" 
			value={cvData.description} 
			name="description"
			onChange={simpleInputUpdate}
			>	
			</textarea>

			<hr />
			<h4>Education</h4>
			{/* TEST IT HERE FIRST */}
			<EducationList 
				educationArray={cvData.educationArray} 
				setEducationArray={(newArray) => {inputUpdate(
					newArray,
					"educationArray"
				)}} 
			/>
			
			<h4>Work Experience</h4>
			<ExperienceList 
				experienceArray={cvData.experienceArray}
				setExperienceArray={(newArray) => {inputUpdate(
					newArray,
					"experienceArray"
				)}}
			/>

			<hr/>

			<button onClick={() => loadCV(CVBlank)}>Clear</button>
			<button onClick={() => loadCV(ExampleCompleted)}>Example</button>

		</div>
	)
}
export default EntireForm;
import React, { Component, useCallback, useEffect, useRef, useState } from "react";

const CVRender = (props) =>{ // props will be cvData from App.jsx
	const {name, prof, description, address, email, phone, experienceArray, educationArray} = props.cvData;
	return(
	<div class="CVRender">
		<div className="cv-header">
			{/*<img></img>*/}
			<h1 className="cv-name">{name}</h1>
			<h2 className="cv-prof">{prof}</h2>
			<hr />
		</div>

		<div class="cv-details-container">
			<div class="cv-description">
				<h3>About Me</h3>
				{description}
			</div>

			<div class="cv-personal">
				<h3>Personal Info</h3>
				<ul>
					<li>Address: {address}</li>
					<li>Email: {email}</li>
					<li>Phone: {phone}</li>
				</ul>
			</div>
		</div>

		<div className="cv-experience">
			<h3>Experience</h3>
			<ul>
				{experienceArray.map((experience, index) => {
					return(
						<li>
							<h4>{experience.yearRange} &nbsp; {experience.prof}</h4>
							<p>{experience.description}</p>
						</li>
					)
				})}
			</ul>
		</div>

		<div className="cv-education"> 
			<h3>Education</h3>
			<ul> 
				{educationArray.map((education, index) => {
					return(
						<li>
							<h4>{education.yearRange} &nbsp; {education.location}</h4>
							<p>
								{education.type}
								<br />
								{education.major}
							</p>
						</li>
					)
				})}
			</ul>
		</div>

	</div>
	)
}

export default CVRender;
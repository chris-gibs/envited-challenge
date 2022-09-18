import React from 'react'
import landingPageImage from '../../assets/images/Landing page image.svg'
import { useNavigate } from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {
	const navigate = useNavigate();

	const goToCreateEvent = () => {
		navigate('/create')
	}

	return (
		<div className="container">
			{/* <div> */}
				<p className="header">Imagine if <span className="innerHeader">Snapchat</span> had events.</p>
				<p className="landingText">Easily host and share events with your friends across any social media.</p>
			{/* </div> */}
			<div>
				<img src={landingPageImage} alt="Movie Night Event"/>
			</div>
			<div>
				<button className="createEventButton" onClick={goToCreateEvent}>🎉 Create my event</button>
			</div>
		</div>
	)
}

export default LandingPage
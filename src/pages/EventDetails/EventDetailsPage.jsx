import React from 'react'
import {useLocation} from 'react-router-dom';
import './EventDetailsPage.css'
import BirthdayCake from '../../assets/images/Birthday cake.png'
import { ImCalendar, ImLocation } from "react-icons/im";

/*

*/

const EventDetailsPage = () => {
	// const {state} = useLocation();
	// console.log('state: ', state)
	// const eventDetails = location.data
// console.log()
	const state = {
		eventName: 'Title',
		hostName: 'Person',
		startDate: '01/12/2021',
		endDate: '01/12/2021',
		eventLocation: {streetName: '123 Fake Street', suburb: 'Fakeville', state: 'Fakeplace', postcode: '1000'},
		eventPhoto: BirthdayCake,
	}
	const {eventName, hostName, startDate, endDate, eventLocation, eventPhoto} = state

	return (
		<div className="eventContainer">
			<img src={eventPhoto} alt="event image" className="eventImage"/>
			<div className="alignLeft">
				<p className="eventName">{eventName}</p>
				<p>Hosted by: <span className="darker">{hostName}</span></p>
			</div>
				<div className="card">
					<ImCalendar/>
					<p className="purple">{startDate}</p>
					<p>to: <span className="darker">{endDate}</span></p>
				</div>

				<div className="card">
					<ImLocation />
					<p className="purple">{eventLocation.streetName}</p>
					<p>{`${eventLocation.suburb} ${eventLocation.state} ${eventLocation.postcode}`}</p>
				</div>

		</div>
	)
}

export default EventDetailsPage
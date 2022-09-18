import React from 'react'
import {useLocation} from 'react-router-dom';
import './EventDetailsPage.css'
import BirthdayCake from '../../assets/images/Birthday cake.png'
import { ImCalendar, ImLocation } from "react-icons/im";

/*

*/

const EventDetailsPage = () => {
	const location = useLocation();
	const data = location.state;
	console.log('data: ', data);

	const {eventName, hostName, startDate, endDate, eventLocation, eventPhoto} = data
	console.log('date: ', JSON.stringify(startDate.$d))
	return (
		<div className="eventContainer">
			<img src={eventPhoto} alt="event image" className="eventImage"/>
			<div className="alignLeft">
				<p className="eventName">{eventName}</p>
				<p>Hosted by: <span className="darker">{hostName}</span></p>
			</div>
				<div className="card">
					<ImCalendar/>
					<p className="purple">{JSON.stringify(startDate.$d)}</p>
					<p>to: <span className="darker">{JSON.stringify(endDate?.$d)}</span></p>
				</div>

				<div className="card">
					<ImLocation />
					<p className="purple">{eventLocation}</p>
					{/* <p>{`${eventLocation.suburb} ${eventLocation.state} ${eventLocation.postcode}`}</p> */}
				</div>

		</div>
	)
}

export default EventDetailsPage
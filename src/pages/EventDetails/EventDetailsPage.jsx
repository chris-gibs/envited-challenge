import React from 'react'
import {useLocation} from 'react-router-dom';
import './EventDetailsPage.css'
import { ImCalendar, ImLocation } from "react-icons/im";
import { BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import BirthdayCake from '../../assets/images/Birthday cake.png'

const EventDetailsPage = () => {
	const location = useLocation();
	const data = location.state;
	console.log('data: ', data);
	const {eventName, hostName, startDate, endDate, street, suburb, state, postcode, eventPhoto} = data

	return (
		<div className="eventContainer">
			<img src={eventPhoto || BirthdayCake} alt="event" className="eventImage"/>
			<div className="alignLeft">
				<p className="eventName">{eventName}</p>
				<p className="hostName">Hosted by: <span className="darker">{hostName}</span></p>
			</div>
			<div className="card">
				<div className="eventBoxShadows">
					<IconContext.Provider value={{ color: "#8456EC" }}>
						<ImCalendar/>
					</IconContext.Provider>
				</div>
				<div>
					<p className="purple">{JSON.stringify(startDate?.$d)}</p>
					<p>to: <span className="darker">{JSON.stringify(endDate?.$d)}</span></p>
				</div>
				<div className="">
					<IconContext.Provider value={{ color: "#828282" }}>
						<BsChevronRight />
					</IconContext.Provider>
				</div>
			</div>

			<div className="card">
				<div className="eventBoxShadows">
					<IconContext.Provider value={{ color: "#E87BF8" }}>
						<ImLocation />
					</IconContext.Provider>
				</div>
				<div>
					<p className="purple">{street}</p>
					<p className="">{`${suburb}, ${state} ${postcode}`}</p>
				</div>
				<div className="">
					<IconContext.Provider value={{ color: "#828282" }}>
						<BsChevronRight />
					</IconContext.Provider>
				</div>
			</div>
		</div>
	)
}

export default EventDetailsPage
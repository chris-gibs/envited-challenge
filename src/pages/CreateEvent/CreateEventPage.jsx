import React, {useState} from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from "react-router-dom";
import BirthdayCake from '../../assets/images/Birthday cake.png'
import './CreateEventPage.css'
import {
  Link
} from "react-router-dom";

const CreateEventPage = () => {
	const navigate = useNavigate();
	const [eventDetails, setEventDetails] = useState({
		eventName: '',
		hostName: '',
		eventPhoto: BirthdayCake,
		streetName: '',
	})

	const onChangeHandler = (event) => {
		setEventDetails(currentState => ({...currentState, [event.target.name]: event.target.value}))
		// if(event.target.value) imageUrl()
	}

	// const imageUrl = () => {
	// 	URL.createObjectURL(eventDetails.eventPhoto)
	// }
	//onClick={goToEventPage}

	const changeStartDate = (value) => {
		setEventDetails(currentState => ({...currentState, startDate: value}))
	}

	const changeEndDate = (value) => {
		setEventDetails(currentState => ({...currentState, endDate: value}))
	}

	return (
		<div className="container">
			<label className="image">
				<img src={BirthdayCake} alt="" className="eventImage"/>
				{/* <input type="file" name="photo" onChange={onChangeHandler}/> */}
			</label>
			<label className="eventNameLabel">
				Event Name
				<input type="text" name="eventName" value={eventDetails.eventName} onChange={onChangeHandler}/>
			</label>
			<label className="hostNameLabel">
				Host Name
				<input type="text" name="hostName" onChange={onChangeHandler}/>
			</label>

			<div className="dates">
			<label className="startLabel">
				Start
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						name="startDate"
						value={eventDetails.startDate}
						onChange={value => changeStartDate(value)}
					/>
				</LocalizationProvider>
			</label>
				<label className="endLabel">End</label>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						name="endDate"
						value={eventDetails.endDate}
						onChange={value => changeEndDate(value)}
					/>
				</LocalizationProvider>
			</div>
			<label className="locationLabel">
				Location
				<input type="text" name="eventLocation" onChange={onChangeHandler}/>
			</label>
			<Link to={"/event"} state={eventDetails}>
				<button className="submitButton" type="submit">
						Next
				</button>
			</Link>
		</div>
	)
}

export default CreateEventPage
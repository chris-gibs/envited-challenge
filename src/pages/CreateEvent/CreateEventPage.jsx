import React, {useState} from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { useNavigate } from "react-router-dom";
import BirthdayCake from '../../assets/images/Birthday cake.png'
import './CreateEventPage.css'
import {
  Link
} from "react-router-dom";
import { ImCalendar, ImLocation, ImImage } from "react-icons/im";
import { IconContext } from "react-icons";
import { red } from '@mui/material/colors';

const CreateEventPage = () => {
	const [eventDetails, setEventDetails] = useState({
		eventName: '',
		hostName: '',
		eventPhoto: BirthdayCake,
		location: {
			streetName: '',

		}
	})

	const onChangeHandler = (event) => {
		console.log('event: ',event)
		setEventDetails(currentState => ({...currentState, [event.target.name]: event.target.value}))
		// if(event.target.value) imageUrl()
	}

	// const imageUrl = () => {
	// 	URL.createObjectURL(eventDetails.eventPhoto)
	// }
	//onClick={goToEventPage}

	const changeDateValue = (value, keyName) => {
		setEventDetails(currentState => ({...currentState, [keyName]: value}))
	}

	return (
		<div className="container">
			<div className="imageContainer">
				<img src={eventDetails.eventPhoto || BirthdayCake} alt="" className="eventImage"/>
				<label for="imgUpload" className="imagePicker">
				<IconContext.Provider value={{ color: "#8456EC", className: "global-class-name", size: '100px'}}>
					<div>
						<ImImage/>
						<input type="file" name="photo" id="imgUpload" onChange={onChangeHandler} hidden/>
					</div>
				</IconContext.Provider>
					<input type="file" name="photo" id="imgUpload" onChange={onChangeHandler} hidden/>
				</label>
			</div>

			<TextField name="eventName" label="Title" onChange={onChangeHandler}/>

			<TextField name="hostName" label="Host" onChange={onChangeHandler}/>

			<div className="dates">
				<p className="startLabel">When: </p>
				<p className="startLabel">Start</p>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						name="startDate"
						value={eventDetails.startDate}
						onChange={value => changeDateValue(value, 'startDate')}
					/>
				</LocalizationProvider>

				<p className="endLabel">End</p>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						name="endDate"
						value={eventDetails.endDate}
						onChange={value => changeDateValue(value, 'endDate')}
					/>
				</LocalizationProvider>
			</div>
			<p className="locationLabel">Location</p>
				<input type="text" name="eventLocation" onChange={onChangeHandler}/>

			<Link to={"/event"} state={eventDetails}>
				<button className="submitButton" type="submit">
						Next
				</button>
			</Link>
		</div>
	)
}

export default CreateEventPage
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
import { ImImage } from "react-icons/im";
import { IconContext } from "react-icons";

const CreateEventPage = () => {
	const [eventDetails, setEventDetails] = useState({
		eventName: '',
		hostName: '',
		eventPhoto: null,
		location: {
			streetName: '',

		}
	})

	const onChangeHandler = (event) => {
		if(event.target.files && event.target.files[0]) {
			console.log(event.target.files)

		}
		console.log('event: ',event)
		setEventDetails(currentState => ({...currentState, [event.target.name]: event.target.value}))
	}

	const changeImage = (event) => {
		URL.createObjectURL(eventDetails.eventPhoto)
	}

	const changeDateValue = (value, keyName) => {
		setEventDetails(currentState => ({...currentState, [keyName]: value}))
	}

	return (
		<div className="container">
			<div className="imageContainer">


					{eventDetails.eventPhoto
					?
						<label for="imgUpload">
							<img src={eventDetails.eventPhoto || BirthdayCake} alt="event" className="eventImage"/>
						</label>
					:
					// <label className="imagePicker">
					<label for="imgUpload">
						<div className="boxShadow">
							<IconContext.Provider value={{ color: "#8456EC", className: "global-class-name", size: '80px',}}>
								<div>
									<ImImage/>

								</div>
							</IconContext.Provider>
						</div>
						</label>
					}
					<input type="file" name="eventPhoto" id="imgUpload" onChange={onChangeHandler} hidden/>

			</div>

			<TextField name="eventName" label="Title" onChange={onChangeHandler}/>

			<TextField name="hostName" label="Host" onChange={onChangeHandler}/>

			<div className="dates">
				<p className="startLabel">When: </p>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						name="startDate"
						label="From"
						value={eventDetails.startDate}
						onChange={value => changeDateValue(value, 'startDate')}
					/>
				</LocalizationProvider>

				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						name="endDate"
						label="To"
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
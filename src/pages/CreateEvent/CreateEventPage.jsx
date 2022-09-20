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
		eventPhoto: '',
		street: '',
		city: '',
		state: '',
		postcode: '',
	})

	const onChangeHandler = (event) => {
		if(event.target.files && event.target.files[0]) {
			eventDetails.eventPhoto = window.URL.createObjectURL(event.target.files[0])
			// .replace('blob:', '')
			console.log('event: ', eventDetails)
		}
		//console.log('event: ',event)
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
						<label htmlFor="imgUpload">
							<img src={eventDetails.eventPhoto} alt="event" className="eventImage"/>
						</label>
					:
						<label htmlFor="imgUpload">
							<div className="imgBoxShadow">
								<IconContext.Provider value={{ color: "#8456EC", size: '80px'}}>
									<ImImage/>
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

			<div>
				<p className="locationLabel">Location: </p>
				<div>
					<TextField name="street" label="Street" onChange={onChangeHandler}/>
					<TextField name="city" label="City" onChange={onChangeHandler}/>
				</div>
				<div>
					<TextField name="state" label="State" onChange={onChangeHandler}/>
					<TextField name="postcode" label="Postcode" onChange={onChangeHandler}/>
				</div>
			</div>

			<Link to={"/event"} state={eventDetails}>
				<button className="submitButton" type="submit">
						Next
				</button>
			</Link>
		</div>
	)
}

export default CreateEventPage
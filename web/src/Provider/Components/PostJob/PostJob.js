import React, { useState } from "react";
import "./PostJob.scss";
import "../../../Theme/__global-theme.scss";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import ChipInput from "material-ui-chip-input";

import {
	FormControl,
	InputLabel,
	Input,
	makeStyles,
	Typography,
	TextField,
	Modal,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		":active": {
			outline: "none",
			border: "none",
		},
	},
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		// top: "50%",
		// left: "50%",
		// transform: "translate(-50%, -50%)",
	},
}));

const PostJob = (props) => {
	const classes = useStyles();
	const [valueDate, onChangeDate] = useState(new Date());
	const [valueTimeStart, onChangeTimeStart] = useState("10:00");
	const [valueTimeEnd, onChangeTimeEnd] = useState("11:00");

	return (
		<Modal className={classes.modal} open="true">
			<div className={classes.paper}>
				<form className={classes.root}>
					<Typography component="h5" variant="h5">
						Create a new job posting
					</Typography>
					<div>
						<FormControl>
							<InputLabel htmlFor="job-title">Title</InputLabel>
							<Input id="job-title"></Input>
						</FormControl>
					</div>
					<div>
						<TextField
							id="job-description-field"
							label="Job Description"
							multiline
							fullWidth
						></TextField>
					</div>
					<div>
						<TextField id="job-location" label="Location" fullWidth></TextField>
					</div>
					<div>
						<Typography component="subtitle1" variant="subtitle1">
							Date
						</Typography>
						<Calendar
							selectRange={true}
							onChange={onChangeDate}
							value={valueDate}
						></Calendar>
					</div>
					<div>
						<Typography component="subtitle1" variant="subtitle1">
							Time
						</Typography>
						<br></br>
						<TimePicker
							id="time-pick-start"
							onChange={onChangeTimeStart}
							value={valueTimeStart}
						></TimePicker>{" "}
						to{" "}
						<TimePicker
							id="time-pick-end"
							onChange={onChangeTimeEnd}
							value={valueTimeEnd}
						></TimePicker>
					</div>
					<div>
						<Typography component="subtitle1" variant="subtitle1">
							Tags
						</Typography>
						<br />
						<ChipInput />
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default PostJob;

import React, { useState } from "react";
import "./PostJob.scss";
import "../../../Theme/__global-theme.scss";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import ChipInput from "material-ui-chip-input";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import {
	FormControl,
	InputLabel,
	Input,
	makeStyles,
	Typography,
	TextField,
	Modal,
	Button,
	OutlinedInput,
	InputAdornment,
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

function NumberFormatCustom(props) {
	const { inputRef, onChange, ...other } = props;

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				});
			}}
			thousandSeparator
			isNumericString
			prefix="VND "
		/>
	);
}

NumberFormatCustom.propTypes = {
	inputRef: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

const PostJob = (props) => {
	const classes = useStyles();
	const [valueDate, onChangeDate] = useState(new Date());
	const [valueTimeStart, onChangeTimeStart] = useState("10:00");
	const [valueTimeEnd, onChangeTimeEnd] = useState("11:00");
	const [values, setValues] = React.useState({
		textmask: "(1  )    -    ",
		numberformat: "100000",
	});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Modal className={classes.modal} open="true">
			<div className={classes.paper}>
				<form className={classes.root}>
					<Typography component="h5" variant="h5">
						Create a new job posting
					</Typography>
					<div>
						<FormControl fullWidth className={classes.margin} variant="outlined">
							<InputLabel htmlFor="job-title-field">Job Title</InputLabel>
							<OutlinedInput
								id="job-title-field"
								// value={values.amount}
								// onChange={handleChange("amount")}
								labelWidth={60}
							/>
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
						<TextField
							id="job-location-field"
							label="Job Location"
							fullWidth
						></TextField>
					</div>
					<div>
						<FormControl fullWidth className={classes.margin} variant="outlined">
							{/* <InputLabel htmlFor="outlined-adornment-amount">Pay Amount</InputLabel>
							<OutlinedInput
								id="outlined-adornment-amount"
								startAdornment={<InputAdornment position="start">$</InputAdornment>}
								labelWidth={90}
								InputProps={{
									inputComponent: NumberFormatCustom,
								}}
							/> */}
							<TextField
								label="Pay amount"
								value={values.numberformat}
								onChange={handleChange}
								name="numberformat"
								id="formatted-numberformat-input"
								InputProps={{
									inputComponent: NumberFormatCustom,
								}}
							/>
						</FormControl>
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
						<ChipInput fullWidth multiline />
					</div>
				</form>
				<div>
					<Button onClick="" variant="contained" color="secondary">
						Cancel
					</Button>
					{"\t"}
					<Button onClick="" variant="contained" color="primary">
						Post
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default PostJob;

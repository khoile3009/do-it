// react
import { TextField } from "@material-ui/core";
import { React, useState } from "react";
import "date-fns";

// ui
import customeTheme from "../../theme/theme";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { FormGroup, Typography, FormControl, InputAdornment, IconButton } from "@material-ui/core";

export default function CustomerProfileForm(props) {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (dateOfBirth) => {
		setSelectedDate(dateOfBirth);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				// dispatch();
			}}
		>
			<FormGroup>
				{/* Date of birth group */}
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						label="Date of birth"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
					/>
				</MuiPickersUtilsProvider>
			</FormGroup>
		</form>
	);
}

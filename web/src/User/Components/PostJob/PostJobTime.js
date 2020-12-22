import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import TimePicker from "react-time-picker";

const PostJobTime = (props) => {
	const [valueTimeStart, onChangeTimeStart] = useState("10:00");
	const [valueTimeEnd, onChangeTimeEnd] = useState("11:00");

	return (
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
	);
};

export default PostJobTime;

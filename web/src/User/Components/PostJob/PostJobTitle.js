import React from "react";
import { FormControl, InputLabel, OutlinedInput, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

const PostJobTitle = (props) => {
	const classes = useStyles;

	return (
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
	);
};

export default PostJobTitle;

import React from "react";
import { FormControl, TextField, makeStyles } from "@material-ui/core";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

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

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

const PostJobPayAmount = () => {
	const classes = useStyles;

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
		<div>
			<FormControl fullWidth className={classes.margin} variant="outlined">
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
	);
};

export default PostJobPayAmount;

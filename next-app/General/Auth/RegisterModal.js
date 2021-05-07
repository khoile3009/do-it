// react
import { React, useState } from "react";
import { register } from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";

// ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {
	FormGroup,
	Typography,
	useMediaQuery,
	FormControl,
	InputAdornment,
	IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import PasswordField from "material-ui-password-field";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(2),
		},
	},
	registerModalWrapper: {
		padding: "1rem",
		maxWidth: "100%",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		width: "fit-content",
	},
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 120,
	},
	formControlLabel: {
		marginTop: theme.spacing(1),
	},
	headerColor: {
		color: "#fff",
	},
	registerHeader: {
		background: "#22d469",
	},
	spanOneRow: {
		width: "80%",
	},
	passwordField: {
		width: "48ch",
	},
	margin: {
		margin: theme.spacing(1),
	},
	signUpButton: {
		background: "#22d469",
		color: "#fff",
		"&:hover": {
			background: "#47e686",
		},
	},
	signUpButtonGoogle: {
		background: "#4285F4",
		color: "#fff",
		"&:hover": {
			background: "#6ea1f5",
		},
	},
	signUpButtonApple: {
		background: "#000",
		color: "#fff",
		"&:hover": {
			background: "#222",
		},
	},
	signUpButtonLinkedIn: {
		background: "#0e76a8",
		color: "#fff",
		"&:hover": {
			background: "#3486ad",
		},
	},
}));

function RegisterModalWrapper(props) {
	return (
		<Draggable handle="#register-modal" cancel={'[class*="MuiDialogContent-root"]'}>
			<Paper {...props}></Paper>
		</Draggable>
	);
}

export default function RegisterModal(props) {
	// api
	const [username, changeUsername] = useState("");
	const [password, changePassword] = useState("");
	const [email, changeEmail] = useState("");
	const [first_name, changeFirstName] = useState("");
	const [last_name, changeLastName] = useState("");
	const [phone_number, changePhoneNumber] = useState("");
	const [checked, check] = useState(false);

	// redux
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	// theme and ui
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const [values, setValues] = useState({
		showPassword: false,
	});

	// events
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		// submitRegisterForm();
		setOpen(false);
	};
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	return (
		<div>
			<Dialog
				className={classes.registerModalWrapper}
				open={open}
				onClose={handleClose}
				RegisterModalWrapper={RegisterModalWrapper}
				aria-labelledby="register-modal"
				fullScreen={fullScreen}
				// fullWidth={fullWidth}
				// maxWidth={maxWidth}
			>
				<DialogTitle
					className={classes.registerHeader}
					style={{ cursor: "move" }}
					id="register-modal-title"
				>
					<Typography className={classes.headerColor} variant="h4">
						Sign up for new account
					</Typography>
				</DialogTitle>
				<form className={classes.registerModalWrapper + " " + classes.root}>
					{/* name form group */}
					<TextField required id="first_name" label="First Name" placeholder="Anh" />
					<TextField required id="last_name" label="Last Name" placeholder="Nguyen" />
					{/* email form group */}
					<FormGroup>
						<TextField
							required
							id="email"
							label="E-mail"
							placeholder="mail@example.com"
							className={classes.spanOneRow}
							helperText="This will also be your login username"
						></TextField>
					</FormGroup>
					{/* password form group */}
					<FormGroup>
						<FormControl
							className={clsx(classes.margin, classes.passwordField)}
							variant="outlined"
							required
						>
							<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								// onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											// onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								}
								labelWidth={82}
							/>
						</FormControl>
						<FormControl
							className={clsx(classes.margin, classes.passwordField)}
							variant="outlined"
							required
						>
							<InputLabel htmlFor="outlined-adornment-password">
								Re-enter Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								// onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											// onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								}
								labelWidth={150}
							/>
						</FormControl>
					</FormGroup>
					{/* submission form group */}
					<hr></hr>
					<FormGroup>
						<Typography align="center" color="textSecondary">
							By signing up, I accept <a href="">Terms of Service</a> and acknowledge
							the <a href="">Privacy Policy</a>.
						</Typography>
						<Button
							variant="contained"
							size="large"
							className={clsx(classes.margin, classes.signUpButton)}
						>
							Sign up
						</Button>
					</FormGroup>
				</form>
				<Typography variant="h5" align="center">
					or
				</Typography>
				<hr />
				<FormGroup className={classes.margin}>
					<Button
						variant="contained"
						size="large"
						className={clsx(classes.margin, classes.signUpButtonGoogle)}
					>
						Sign up by Google
					</Button>
					<Button
						variant="contained"
						size="large"
						className={clsx(classes.margin, classes.signUpButtonApple)}
					>
						Sign up by Apple
					</Button>
					<Button
						variant="contained"
						size="large"
						className={clsx(classes.margin, classes.signUpButtonLinkedIn)}
					>
						Sign up by LinkedIn
					</Button>
				</FormGroup>
			</Dialog>
		</div>
	);
}

// react
import { React, useState } from "react";
import { register } from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";
import RegisterForm from "./RegisterForm"

// ui
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(2),
		},
	},
	registerModalWrapper: {
		paddingLeft: "2rem",
		paddingRight: "2rem",
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
	passwordField: {
		width: "32ch",
		margin: "1rem",
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
	const [repassword, changeRepassword] = useState("");
	const [email, changeEmail] = useState("");
	const [first_name, changeFirstName] = useState("");
	const [last_name, changeLastName] = useState("");
	const [phone_number, changePhoneNumber] = useState("");

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
		passwordMatch: false,
		signUpButtonState: false,
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
	const handleRepassword = (event) => {
		changeRepassword(event.target.value);
		if (password !== repassword) {
			setValues({ ...values, passwordMatch: false });
		} else {
			setValues({ ...values, passwordMatch: true });
		}
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
				<form
					onSubmit={(event) => {
						event.preventDefault();
						dispatch(
							register(
								username,
								email,
								password,
								first_name,
								last_name,
								parseInt(phone_number),
								true
							)
						);
					}}
					className={classes.registerModalWrapper + " " + classes.root}
				>
					<RegisterForm
						first_name={first_name} changeFirstName={changeFirstName}
						last_name={last_name} changeLastName={changeLastName}
						email={email} changeEmail={changeEmail}
						username={username} changeUsername={changeUsername}
						phone_number={phone_number} changePhoneNumber={changePhoneNumber}
						password={password} changePassword={changePassword}
						repassword={repassword} changeRepassword={changeRepassword}
						classes={classes}
						values={values}
						handleClickShowPassword={handleClickShowPassword}
						handleRepassword={handleRepassword}
					></RegisterForm>
				</form>
			</Dialog>
		</div>
	);
}

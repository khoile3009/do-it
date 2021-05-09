// LoginModal.js

// react
import { React, useState } from "react";
import { signin } from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./LoginForm";

// ui
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(2),
		},
	},
	loginModalWrapper: {
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
	loginHeader: {
		background: "#22d469",
	},
	passwordField: {
		width: "32ch",
		margin: "1rem",
	},
	margin: {
		margin: theme.spacing(1),
	},
	loginButton: {
		background: "#22d469",
		color: "#fff",
		"&:hover": {
			background: "#47e686",
		},
	},
	loginButtonGoogle: {
		background: "#4285F4",
		color: "#fff",
		"&:hover": {
			background: "#6ea1f5",
		},
	},
	loginButtonApple: {
		background: "#000",
		color: "#fff",
		"&:hover": {
			background: "#222",
		},
	},
	loginButtonLinkedIn: {
		background: "#0e76a8",
		color: "#fff",
		"&:hover": {
			background: "#3486ad",
		},
	},
}));

function LogInModalWrapper(props) {
	return (
		<Draggable handle="#login-modal" cancel={'[class*="MuiDialogContent-root]'}>
			<Paper {...props}></Paper>
		</Draggable>
	);
}

export default function LoginModal(props) {
	// api
	const [username, changeUsername] = useState("");
	const [password, changePassword] = useState("");
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
		loginButtonState: false,
	});

	// event handlers
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	return (
		<div>
			<Dialog
				className={classes.loginModalWrapper}
				open={open}
				onClose={handleClose}
				LogInModalWrapper={LogInModalWrapper}
				aria-labelledby="login-modal"
				fullScreen={fullScreen}
			>
				<DialogTitle
					className={classes.loginHeader}
					style={{ cursor: "move" }}
					id="login-modal-title"
				>
					<Typography className={classes.headerColor} variant="h4">
						Member log in
					</Typography>
				</DialogTitle>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						dispatch(signin(username, password, checked));
					}}
					className={clsx(classes.loginModalWrapper, classes.root)}
				>
					<LoginForm
						username={username}
						changeUsername={changeUsername}
						password={password}
						changePassword={changePassword}
						classes={classes}
						values={values}
						handleClickShowPassword={handleClickShowPassword}
					></LoginForm>
				</form>
			</Dialog>
		</div>
	);
}

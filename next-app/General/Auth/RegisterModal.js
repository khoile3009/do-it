// react
import { React, useState } from "react";

import RegisterForm from "./RegisterForm";
import customTheme from "../../theme/theme";

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
		background: customTheme.palette.primary.main,
	},
	passwordField: {
		width: "32ch",
		margin: "1rem",
	},
	margin: {
		margin: theme.spacing(1),
	},
	signUpButton: {
		background: customTheme.palette.primary.main,
		color: "#fff",
		"&:hover": {
			background: customTheme.palette.secondary.main,
		},
	},
	signUpButtonGoogle: {
		background: customTheme.palette.google.main,
		color: "#fff",
		"&:hover": {
			background: customTheme.palette.google.sub,
		},
	},
	signUpButtonApple: {
		background: customTheme.palette.apple.main,
		color: "#fff",
		"&:hover": {
			background: customTheme.palette.apple.sub,
		},
	},
	signUpButtonLinkedIn: {
		background: customTheme.palette.linkedin.main,
		color: "#fff",
		"&:hover": {
			background: customTheme.palette.linkedin.sub,
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

	// redux

	// theme and ui
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	// events
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		// submitRegisterForm();
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				className={classes.registerModalWrapper}
				open={props.open}
				onClose={props.handleClose}
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

				<RegisterForm classes={classes}></RegisterForm>
			</Dialog>
		</div>
	);
}

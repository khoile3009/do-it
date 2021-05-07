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
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(2),
		},
	},
	registerModalWrapper: {
		padding: "1rem",
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
	// const fullWidth = useState(false);
	// const maxWidth = useState("md");

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
						Registration
					</Typography>
				</DialogTitle>
				<form className={classes.registerModalWrapper + " " + classes.root}>
					<TextField required id="first_name" label="First Name" placeholder="Anh" />
					<TextField required id="last_name" label="Last Name" placeholder="Nguyen" />
				</form>
			</Dialog>
		</div>
	);
}

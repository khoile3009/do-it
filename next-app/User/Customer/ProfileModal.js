// react
import { React, useState } from "react";
import ProfileForm from "./ProfileForm";

// ui
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core";
import Draggable from "react-draggable";
import { useMediaQuery, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(2),
		},
	},
	profileModalWrapper: {
		paddingLeft: "2rem",
		paddingRight: "2rem",
		maxWidth: "100%",
		minWidth: 400,
		minHeight: 600,
		paddingBottom: 50,
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
	profileHeader: {
		background: "#22d469",
	},
	updateProfileButton: {
		background: "#22d469",
		color: "#fff",
		"&:hover": {
			background: "#47e686",
		},
	},
}));

function ProfileModalWrapper(props) {
	return (
		<Draggable handle="#profile-modal" cancel={'[class*="MuiDialogContent-root]'}></Draggable>
	);
}

export default function CustomerProfileModal(props) {
	// theme and ui
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	// event handlers
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Dialog
				className={classes.profileModalWrapper}
				open={props.open}
				onClose={props.handleClose}
				ProfileModalWrapper={ProfileModalWrapper}
				aria-labelledby="profile-modal"
				fullScreen={fullScreen}
			>
				<DialogTitle
					className={classes.profileHeader}
					style={{ cursor: "move" }}
					id="profile-modal-title"
				>
					<Typography className={classes.headerColor} variant="h4">
						Edit Profile
					</Typography>
				</DialogTitle>

				<ProfileForm classes={classes}></ProfileForm>
			</Dialog>
		</div>
	);
}

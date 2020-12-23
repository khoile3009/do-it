import React, { useState } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from "@material-ui/core";

const PostJobConfirmation = (props) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				open="open"
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Discard new job post?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						All progress will be lost.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						CANCEL
					</Button>
					<Button onClick={handleClose} color="primary" autoFocus>
						DISCARD
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default PostJobConfirmation;

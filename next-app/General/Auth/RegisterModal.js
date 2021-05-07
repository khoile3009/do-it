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

	// ui
	const [open, setOpen] = useState(true);

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
				open={open}
				onClose={handleClose}
				RegisterModalWrapper={RegisterModalWrapper}
				aria-labelledby="register-modal"
			>
				<DialogTitle style={{ cursor: "move" }} id="register-modal-title">
					Registration
				</DialogTitle>
			</Dialog>
		</div>
	);
}

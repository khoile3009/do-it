// LoginForm.js

// react
import { React, useState } from "react";

// form ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import {
	FormGroup,
	Typography,
	FormControl,
	InputAdornment,
	IconButton,

} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";

import { signin } from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function LoginForm({
	classes,
}) {

	// api
	const [username, changeUsername] = useState("");
	const [password, changePassword] = useState("");

	// redux
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const [values, setValues] = useState({
		showPassword: false,
		loginButtonState: false,
	});

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch(signin(username, password, true));
			}}
			className={clsx(classes.loginModalWrapper, classes.root)}
		>
			<div>
				<FormGroup>
					{/* Username form group */}
					<TextField
						required
						onChange={(e) => changeUsername(e.target.value)}
						value={username}
						id="login_username"
						label="Username or email"
					></TextField>

					{/* Password form group */}
					<FormControl className={classes.passwordField} required>
						<InputLabel>Password</InputLabel>
						<Input
							onChange={(e) => changePassword(e.target.value)}
							value={password}
							id="login_password"
							label="Password"
							type={values.showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										edge="end"
									>
										{values.showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							}
						></Input>
					</FormControl>

					{/* Remember token form group */}
					{/* <FormControlLabel
					control={
						<Checkbox
							required
							checked="true"
							disabled="true"
							onChange={(e) => check(e.target.value)}
						></Checkbox>
					}
					label="Remember me for this session"
				></FormControlLabel> */}
				</FormGroup>

				{/* Log in submission */}
				<FormGroup>
					<Button
						type="submit"
						variant="contained"
						size="large"
						className={clsx(classes.margin, classes.loginButton)}
					>
						Log In
				</Button>
				</FormGroup>
				<Typography variant="h5" align="center">
					or
			</Typography>
				<FormGroup className={classes.margin}>
					<Button
						variant="contained"
						size="large"
						className={clsx(classes.margin, classes.loginButtonGoogle)}
					>
						Sign in by Google
				</Button>
					<Button
						variant="contained"
						size="large"
						className={clsx(classes.margin, classes.loginButtonLinkedIn)}
					>
						Sign in by LinkedIn
				</Button>
					<Button
						variant="contained"
						size="large"
						className={clsx(classes.margin, classes.loginButtonApple)}
					>
						Sign in by Apple
				</Button>
				</FormGroup>
			</div>
		</form>
	);
}
